import React from 'react';
import {analogDataTable, analogDataTableFromContent} from './analogDataTable';

//TODO  模拟真实的分页查询,上线删除     map：[id,type,name,other]
function AnalogQuery({ page, size, map }) {
  let content = analogDataTableFromContent(map);
  console.log(content);

  function afterQueryContent() {
    let ContentData = [];
    if ((page - 1) * size > content.length) {
      ContentData = [];
    } else if (
      (page - 1) * size < content.length &&
      content.length < page * size
    ) {
      ContentData = content.splice(
        (page - 1) * size,
        content.length - (page - 1) * size,
      );
    } else if (page * size <= content.length) {
      ContentData = content.splice(page === 1 ? 0 : (page - 1) * size, size);
    }
    return ContentData;
  }
  return {
    utData: {
      totalElements: content.length,
      totalPages: Math.ceil(content.length / size),
      size: size,
      number: page,
      content: afterQueryContent(),
    },
  };
}
export default AnalogQuery;


//TODO  模拟真实的分页查询  + 搜索框 （ 原来的思路是  查询英文名称和中文名称  或者 只查询 name ）  ,上线删除   map:[id,type,name,other]       未完成
export const analogQueryToKeyword = ({ page, size, keyword, columns }) => {
  let content = analogDataTable(columns);
    let ContentData = [];

    if (keyword === '' || keyword === null || keyword === undefined) {
      ContentData = content;
    } else {
      ContentData = content.filter((value, index, arr) => {



        // if (
        //     (value.hasOwnProperty('chName') || value.hasOwnProperty('enName')) &&
        //     value.hasOwnProperty('name')
        // ) {
        //   if (value.name === undefined) {
        //     return (
        //         value?.chName.indexOf(`${keyword}`) !== -1 ||
        //         value?.enName.indexOf(`${keyword}`) !== -1
        //     );
        //   } else {
        //     return value?.name.indexOf(`${keyword}`) !== -1;
        //   }
        // } else {
        //   return false;
        // }
      });
    }


  function lastContentData() {
    if ((page - 1) * size > content.length) {
      ContentData = [];
    } else if (
        (page - 1) * size < content.length &&
        content.length < page * size
    ) {
      ContentData = content.splice(
          (page - 1) * size,
          content.length - (page - 1) * size,
      );
    } else if (page * size <= content.length) {
      ContentData = content.splice(page === 1 ? 0 : (page - 1) * size, size);
    }
    return ContentData;
  }

  return {
    utData: {
      totalElements: lastContentData().length,
      totalPages: Math.ceil(lastContentData().length / size),
      size: size,
      number: page,
      content: lastContentData(),
    },
  };
};
