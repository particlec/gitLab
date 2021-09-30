import { format as dateFormat } from 'date-fns';
import React from 'react';

//TODO  模拟表格数据使用,上线删除
export const analogDataTable = columns => {
    let data = [];
    for (let i = 0; i < 30; i++) {
        let obj = {};
        for (let j = 0; j < columns?.length; j++) {
            switch (columns[j]['key']) {
                case 'description':
                    obj[`${columns[j]['key']}`] =
                        '我是描述我是描述10我是描述我是描述20我是描述我是描述30我是描述我是描述40我是描述我是描述50';
                    break;
                case 'enName':
                    obj[`${columns[j]['key']}`] = 'particleC' + i;
                    break;
                case 'chName':
                    obj[`${columns[j]['key']}`] = '柯一博' + i;
                    break;
                case 'createTime':
                    obj[`${columns[j]['key']}`] = dateFormat(
                        new Date().valueOf(),
                        'YYYY-MM-DD hh-mm-ss',
                    );
                    break;
                default:
                    obj[`${columns[j]['key']}`] = 'bsll' + i;
                    break;
            }
        }
        data.push(obj);
    }
    console.log(data);
    return data;
};

// 根据content 信息伪造表格信息  [id,type,name,other]

export const analogDataTableFromContent = map => {
    let data = [];

    for (let i = 0; i < 37; i++) {
        let obj = {};

        for (let j = 0; j < map?.length; j++) {
            switch (map[j]) {
                case 'id':
                    obj['id'] = i;
                    break;
                case 'name':
                    obj['name'] = i;
                    break;
                case 'type':
                    obj['type'] = (j & 1) === 0 ? 0 : 1;
                    break;
                case 'description':
                    obj['description'] =
                        '我是描述我是描述10我是描述我是描述20我是描述我是描述30我是描述我是描述40我是描述我是描述50';
                    break;
                default:
                    obj[`${map[j]}`] = `${map[j]}` + i;
                    break;
            }
        }
        data.push(obj);
    }
    return data;
};


