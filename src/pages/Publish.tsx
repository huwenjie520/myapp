import React from 'react';
import type { BadgeProps } from 'antd';
import { Badge, Calendar } from 'antd';
import type { Dayjs } from 'dayjs';

const getListData = (value: Dayjs) => {
  // console.log("valuehhhhh:",value)
  // console.log("value.date:",value.date())
  let listData;
  switch (value.date()) {
    case 1:
      listData = [
        { type: 'warning', content: 'This is warning event.', href: 'http://www.baidu.com' },
        { type: 'success', content: 'This is usual event.', href: 'http://www.taobao.com' },
      ];
      break;
    case 10:
      listData = [
        { type: 'warning', content: 'This is warning event.' },
        { type: 'success', content: 'This is usual event.' },
        { type: 'error', content: 'This is error event.' },
      ];
      break;
    case 15:
      listData = [
        { type: 'warning', content: '支持转码,问卷调整样式' },
        { type: 'success', content: 'This is very long usual event。。....' },
        { type: 'error', content: 'This is error event 1.' },
        { type: 'error', content: 'This is error event 2.' },
        { type: 'error', content: 'This is error event 3.' },
        { type: 'error', content: 'This is error event 4.' },
      ];
      break;
    default:
  }
  return listData || [];
};

const getMonthData = (value: Dayjs) => {
  if (value.month() === 8) {
    return 1394;
  }
};

const Publish: React.FC = () => {
  const monthCellRender = (value: Dayjs) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };

  const dateCellRender = (value: Dayjs) => {
    const listData = getListData(value);
    console.log('listData:', listData);
    return (
      <ul
        className="events"
        style={{
          marginLeft: '-2.5em',
        }}
      >
        {listData.map((item) => (
          <li key={item.content}>
            <a href={item.href}>
              <Badge status={item.type as BadgeProps['status']} text={item.content} />
            </a>
          </li>
        ))}
      </ul>
    );
  };
  //使用dateCellRender和monthCellRender自定义需要渲染的数据
  return <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />;
};

export default Publish;
