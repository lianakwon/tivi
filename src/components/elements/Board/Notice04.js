import React from 'react'
import './NoticeInner.css'
import NoticeList from './NoticeList'

const Notice04 = () => {

	return (
		<div id='noticeInner'>
			<h1>{NoticeList[3].title}</h1>
			<p>{NoticeList[3].date}</p>
			<div className='inner'>
				<div>
					<img src={`${NoticeList[3].src}`} alt={NoticeList[3].title} />
					<p>{NoticeList[3].text1}</p>
					<p>{NoticeList[3].text2}</p>
					<p>{NoticeList[3].text3}</p>
					<p>{NoticeList[3].text4}</p>
					<p>{NoticeList[3].text5}</p>
					<p>{NoticeList[3].text6}</p>
					<p>{NoticeList[3].text7}</p>
					<p>{NoticeList[3].text8}</p>
				</div>
			</div>
		</div>
	);
};
export default Notice04;