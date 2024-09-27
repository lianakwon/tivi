import React from 'react'
import './NoticeInner.css'
import NoticeList from './NoticeList'

const Notice05 = () => {

	return (
		<div id='noticeInner'>
			<h1>{NoticeList[4].title}</h1>
			<p>{NoticeList[4].date}</p>
			<div className='inner'>
				<div>
					<img src={`${NoticeList[4].src}`} alt={NoticeList[4].title} />
					<p>{NoticeList[4].text1}</p>
					<p>{NoticeList[4].text2}</p>
					<p>{NoticeList[4].text3}</p>
					<p>{NoticeList[4].text4}</p>
					<p>{NoticeList[4].text5}</p>
					<p>{NoticeList[4].text6}</p>
					<p>{NoticeList[4].text7}</p>
				</div>
			</div>
		</div>
	);
};
export default Notice05;