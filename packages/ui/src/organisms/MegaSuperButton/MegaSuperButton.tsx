import { Button } from '$atoms'
import { DefaultButton } from '$molecules'
import { MegaDefaultButton } from '$organisms'

export const MegaSuperButton = () => (
	<div>
		<Button />
		<DefaultButton />
		<MegaDefaultButton />
		<br />
		<span>MegaSuperButton</span>
	</div>
)
