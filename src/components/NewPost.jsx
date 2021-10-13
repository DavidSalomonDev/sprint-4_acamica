import { useState } from 'react'
import './styles/NewPost.css'

const NewPost = () => {
	const [charCounter, setcharCounter] = useState(0)

	const handleCharCounter = (e) => {
		setcharCounter(e.target.value.length)
	}

	return(
		<div className='NewPost'>
			<div className='NewPost-space wrapper'>
				<div>
					Profile
				</div>
				<form className='NewPost-form'>
					<textarea 
						onChange={handleCharCounter} 
						maxLength='200'
						className='form-input' 
						placeholder="What's happening?"/>
					<div className='form-progressbar' 
					style={{width:charCounter/2+'%'}}></div>
					<div className='form-stats'>
						<span className='form-counter'>{charCounter}</span>
						<span className='form-max'>200 max.</span>
					</div>
					<button className='form-button'>Post</button>
				</form>
			</div>
		</div>
		
	)
}

export default NewPost