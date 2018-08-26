import config from '../../../config';

export function getImageUri(path) {
  return config.IMAGE_BASE + path;
}
