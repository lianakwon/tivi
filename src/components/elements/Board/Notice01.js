import React from 'react'
import './NoticeInner.css'
import NoticeList from './NoticeList'

const Notice01 = () => {

	return (
		<div id='noticeInner'>
			<h1>{NoticeList[0].title}</h1>
			<p>{NoticeList[0].date}</p>
			<div className='inner'>
				<div>
					<img src={`${NoticeList[0].src}`} alt={NoticeList[0].title} />
					<p>{NoticeList[0].text1}</p>
					<p>{NoticeList[0].text2}</p>
					<p>{NoticeList[0].text3}</p>
				</div>
			</div>
		</div>
	);
};
export default Notice01;