import { gql } from '@apollo/client';

export function downloadFile(
  linkUrl: string,
  pageUrl: string
): Promise<{ id: string }> {
  return fetch('http://127.0.0.1:4000', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        mutation DownloadFile($file: FileInput!) {
          downloadFile(file: $file) {
            id
          }
        }
      `,
      variables: {
        file: {
          linkUrl,
          pageUrl,
        },
      },
    }),
  }).then((res) => res.json());
}

export type FileDownload = {
  id: string;
  createdDate: number;
  name: string;
  size: number;
  downloadedSize: number;
  status: 'active' | 'waiting' | 'error' | 'paused' | 'removed' | 'complete';
};

export type GetDownloadsType = {
  files: FileDownload[];
};

export const GET_DOWNLOADS = gql`
  query Files {
    files {
      id
      createdDate
      name
      size
      downloadedSize
      status
    }
  }
`;
