import React from 'react';
import Card from '../../components/common/Card';
import ScrollListBoxComp from '../../components/ScrollListBoxComp';
import JobListComponent from '../../components/JobListComponent';
import { dataList } from '../../mockData';

export default () => {
    return (
        <div style={{ width: 800, height: 600, margin: '50px auto' }}>
            <Card
                title="最新职位"
                extra={
                    <a href="https://job.alibaba.com/zhaopin/index.htm" target="_blank">
                        更多
                    </a>
                }
                >
                <ScrollListBoxComp>
                   {
                       dataList && [...dataList, ...dataList].map((item, index) => {
                           return <JobListComponent key={index} data={item} />
                       })
                   }
                </ScrollListBoxComp>
            </Card>
        </div>
    )
}