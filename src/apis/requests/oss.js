/**
 * @overview 阿里云相关请求集合
 * */

import { ajaxGet } from '../ajax';
import { GET_OSS_IMG_UPLOAD_SIGN } from '../url';

/**
 * 获取阿里云图片上传sign
 */
const getOssImgUploadSign = () => {
  return ajaxGet(GET_OSS_IMG_UPLOAD_SIGN);
};

export { getOssImgUploadSign };
