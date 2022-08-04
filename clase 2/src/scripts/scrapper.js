import {$,$$} from '../utils/selectors'
import {profileSelectors} from '../config/scrapperSelectors'

const name =$(profileSelectors.name).textContent
const experienceElements = $$('profileSelectors.experienceElements')
const experienceTitles = []

experienceElements.forEach(
	(experienceListItem)=>{
		const experienceTitleElement = $('span[aria-hidden]', experienceListItem)
		experienceTitles.push(experienceTitleElement.textContent)
	}
	)

const profile = {
	name,
	experienceTitles
}
console.table(profile)