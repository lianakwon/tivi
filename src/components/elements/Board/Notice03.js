import React from 'react'
import './NoticeInner.css'
import NoticeList from './NoticeList'

const Notice03 = () => {

	return (
		<div id='noticeInner'>
			<h1>{NoticeList[2].title}</h1>
			<p>{NoticeList[2].date}</p>
			<div className='inner'>
				<div>
					<img src={`${NoticeList[2].src}`}  alt={NoticeList[2].title}/>
					<p>{NoticeList[2].text1}</p>
					<p>{NoticeList[2].text2}</p>
					<p>{NoticeList[2].text3}</p>
					<p>{NoticeList[2].text4}</p>
					<p>{NoticeList[2].text5}</p>
					<p>{NoticeList[2].text6}</p>
					<p>{NoticeList[2].text7}</p>
				</div>
			</div>
		</div>
	);
};
export default Notice03;