const dataSeed: {
  responseTypes: Array<string | number | undefined>;
} = {
  responseTypes: [],
};

const headerResponseTypes = [
  'Content-Type: application/json',
  'Content-Type: application/xml',
  'Content-Type: text/plain',
  'Content-Type: text/html',
  'Content-Type: application/javascript',
  'Content-Type: image/jpeg',
  'Content-Type: image/png',
  'Content-Type: audio/mp3',
  'Content-Type: video/mp4',
  'Content-Type: application/pdf',
  'Content-Type: application/zip',
  'Content-Type: application/vnd.ms-excel',
  'Content-Type: application/vnd.ms-powerpoint',
  'Content-Type: application/vnd.ms-word',
  'Content-Type: application/rss+xml',
  'Content-Type: application/xhtml+xml',
  'Content-Type: application/json-patch+json',
  'Content-Type: application/ld+json',
  'Content-Type: application/octet-stream',
  'Content-Type: application/x-www-form-urlencoded',
  'Content-Type: application/graphql',
  'Content-Type: application/vnd.api+json',
  'Content-Type: multipart/form-data',
  'Content-Type: text/csv',
  'Content-Type: text/calendar',
  'Content-Type: text/vtt',
  'Content-Type: text/markdown',
];

dataSeed.responseTypes.push(...headerResponseTypes);
