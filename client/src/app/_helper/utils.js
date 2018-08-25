import config from '../../../config';

export function getImageUri(path) {
  config.IMAGE_BASE + path;
}
