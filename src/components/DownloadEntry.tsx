import React, { useState } from 'react';
import { FileDownload } from 'utils/fetchUtils';
import { Button, Divider, Progress, Space } from 'antd';
import {
  FileOutlined,
  FolderFilled,
  PlaySquareFilled,
} from '@ant-design/icons';
import Collapse from 'react-bootstrap/Collapse';

export default function DownloadEntry({
  file,
  expanded = false,
  onClick,
}: {
  file: FileDownload;
  expanded?: boolean;
  onClick?: (id: string) => void;
}): JSX.Element {
  const progressVal = file.size <= 0 ? 0 : file.downloadedSize / file.size;

  return (
    <div className="p-2 bg-slate-50 rounded select-none">
      <div
        id="entry-desc"
        className="flex flex-row"
        onClick={() => onClick?.(file.id)}
      >
        <div className="w-10 shrink-0 flex flex-col items-center justify-center mr-2">
          <FileOutlined className="w-fit h-auto" style={{ fontSize: '34px' }} />
        </div>
        <div className="flex flex-col w-full">
          <span
            className="text-base h-12 overflow-hidden text-ellipsis"
            title={file.name}
          >
            {file.name}
          </span>

          <Progress
            percent={Math.floor(progressVal * 100)}
            status={
              file.status === 'active'
                ? 'active'
                : file.status === 'complete'
                ? 'success'
                : file.status === 'error'
                ? 'exception'
                : 'normal'
            }
          />
        </div>
      </div>
      <Collapse in={expanded}>
        <div>
          <Divider />

          <Space id="entry-ext">
            {/* <Button className="">Show in folder</Button> */}
            {file.status === 'paused' && (
              <Button type="primary" disabled>
                Resume
              </Button>
            )}
            {file.status === 'active' && (
              <Button type="primary" disabled>
                Pause
              </Button>
            )}
            {file.status === 'active' ||
              (file.status === 'paused' && (
                <Button type="primary" disabled>
                  Cancel
                </Button>
              ))}
            {file.status === 'complete' && (
              <Button type="primary">Show in folder</Button>
            )}
            {file.status === 'error' && (
              <Button type="primary" disabled>
                Retry
              </Button>
            )}
          </Space>
        </div>
      </Collapse>
    </div>
  );
}
