import React from 'react'
import './NoticeInner.css'
import NoticeList from './NoticeList'

const Notice02 = () => {

	return (
		<div id='noticeInner'>
			<h1>{NoticeList[1].title}</h1>
			<p>{NoticeList[1].date}</p>
			<div className='inner'>
				<div>
					<img src={`${NoticeList[1].src}`} alt={NoticeList[1].title} />
					<p>{NoticeList[1].text1}</p>
					<p>{NoticeList[1].text2}</p>
					<p>{NoticeList[1].text3}</p>
					<p>{NoticeList[1].text4}</p>
					<p>{NoticeList[1].text5}</p>
				</div>
			</div>
		</div>
	);
};
export default Notice02;