import {$} from "../utils/selector"
import {profileSelectors} from "../utils/selector"

const name = $('h1').textContent

const experienceElements = $$((profileSelectors.experiencesElements))
const experienceTitles = []

experiencesElements.forEach((experienceListItem)=>{
	const experienceTitle = $('span[aria-hidden]',element)
	experienceTitles.push($element)
})

const profile = {
	name,
	experienceTitles
}

console.table(profile)