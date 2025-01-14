import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import StaffLayout from '@/Layouts/StaffLayout';
import Split from 'react-split'
import moment from 'moment';

export default function StaffDashboard({ auth }) {
    const range = Array.from({ length: 50 }, (_, i) => i + 1);

    const NewsItem = (data) => {
        return (
            <div className="news-item" >
                <div className="date text-sm">
                    <span>{moment().format('yyyy/MM/DD HH:mm')}</span>
                </div>
                <div className="content">
                    <div className="row w-full p-3">
                        <div className="title">{data?.title || 'タイトルタイトル'}</div>
                        <div className="user">
                            <div className="avatar">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8QATbxHgFvoPhdxKFIcSQragjLC6BcCo9FiU0koLh0FGzL3FocfsauUs53dAHfKCecaA&usqp=CAU" alt="" />
                            </div>
                            <div className="name">
                                {data?.name || '名前'}
                            </div>
                        </div>
                    </div>
                    <div className="expand">
                        <div className="desc">
                            {data?.desc || 'テキストテキストテキストテキスト'}
                        </div>
                        <div className="reply-btn">
                            <button>返信</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    };

    return (
        <StaffLayout title="HOME" user={auth.user}>
            <Split
                className="split"
                direction='vertical'
            >
                <div className="news-info p-4">
                    <div className='news-list overflow-auto h-full'>
                        {range.map((item, key) => (
                            <NewsItem data={item} />
                        ))}
                    </div>
                    <div className="create-news">
                        新規投稿
                    </div>
                </div>
                <div className='sales-info p-4'>売上表他のメイン画面を表示</div>
            </Split>
        </StaffLayout>
    )
}