import React, { useState } from 'react';
import { Cascader } from 'antd';

interface Option {
  value: string;
  label: string;
  children?: Option[];
  isLeaf?: boolean;
  loading?: boolean;
}

const optionLists: Option[] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    isLeaf: false,
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    isLeaf: false,
  },
];

const CascaderFrame: React.FC = () => {
  const [options, setOptions] = useState<Option[]>(optionLists);

  const onChange = (value: string[], selectedOptions: Option[]) => {
    console.log('value:', value, 'selectOptions:', selectedOptions);
  };

  const loadData = (selectedOptions: Option[]) => {
    console.log('selected.length:', selectedOptions.length);
    //selectedOptions.length指的是目前有几级
    const targetOption = selectedOptions[selectedOptions.length - 1];
    console.log('targetOption:', targetOption);
    targetOption.loading = true;

    // load options lazily
    //进行异步操作，根据选取的value请求下一级的数据，
    //如果回来的数据带有isLeaf为false的标志，会自动再屌用loaddata方法
    setTimeout(() => {
      targetOption.loading = false;
      console.log('settimeout===');
      targetOption.children = [
        {
          label: `${targetOption.label} Dynamic 1`,
          value: 'dynamic1',
          isLeaf: false,
        },
        {
          label: `${targetOption.label} Dynamic 2`,
          value: 'dynamic2',
          isLeaf: false,
        },
      ];
      //目的是让react组件知道数据发生了变化，然后更新数据
      setOptions([...options]);
    }, 3000);
  };

  return <Cascader options={options} loadData={loadData} onChange={onChange} changeOnSelect />;
};

export default CascaderFrame;
