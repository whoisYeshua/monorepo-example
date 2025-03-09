import { isVoid } from '../isEmpty'

export const defaultAllowedTags = ['p', 'ul', 'ol', 'li', 'strong', 'b']

const sanitizeHtmlWithAllowedTags = (element: HTMLElement | ChildNode, allow: string[]) => {
	for (const child of Array.from(element.childNodes)) {
		if (child instanceof HTMLElement && child.nodeType === Node.ELEMENT_NODE) {
			sanitizeHtmlWithAllowedTags(child, allow)
			const tag = child.tagName.toLowerCase()
			if (allow.includes(tag)) {
				for (const attr of Array.from(child.attributes)) {
					child.removeAttributeNode(attr)
				}
			} else {
				while (child.firstChild) element.insertBefore(child.firstChild, child)
				child.remove()
			}
		}
	}
}

export const htmlSanitizer = (
	html: string | null | undefined,
	allowedTags = defaultAllowedTags
) => {
	if (isVoid(html)) return null
	const parser = new DOMParser()
	const doc = parser.parseFromString(html, 'text/html')
	if (doc.body) sanitizeHtmlWithAllowedTags(doc.body, allowedTags)
	return doc.body.innerHTML
}

export const removeTags = (str?: string | null) => str?.replaceAll(/(<([^>]+)>)/gi, '') ?? ''
