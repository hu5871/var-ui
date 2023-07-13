import { ExtractDefaultPropTypes, PropType } from 'vue';


export type FileStatus= -1|0|1|2|3
export interface FileStatusMap{
  max:-1;
  wait:0;
  loadding:1;
  success:2;
  fail:3;
}
export interface LoadFileList  {
  [key: string]: any;
  file:UniApp.ChooseImageSuccessCallbackResultFile | File | UniApp.ChooseImageSuccessCallbackResultFile []| File[] ,
  isImage?:boolean;
  isVideo?:boolean;
  deletable?: boolean;
  url?: string;
  status?:string;
  response?:any;
  statusCode?: FileStatus;
  progress?:number;
  name?:any;
}

export type FileLoadOrUniFileType =Partial<LoadFileList>



export type Capture = 'album' | 'camera'
export type ImageSizeType = 'original' | 'compressed'| ['original','compressed']
export interface CheckFunParam {
  fileType: string;
  multiple: boolean;
  capture:Capture|Capture[]|string[];
  compressed:boolean;
  maxDuration:number;
  imageSizeType:ImageSizeType|string[];
  camera:'back'|'front';
  maxCount:number;
}

export const uploadProps = {
  modelValue: {
    type: Array as PropType<FileLoadOrUniFileType[] | string[]>,
    default: () => ([])
  },
  url:{
    type:String,
    default:''
  },
  fileName:{
    type:String,
    default:''
  },
  formData:{
    type:Object as PropType<Record<string,any>>,
    default:()=>({})
  },
  header:{
    type:Object as PropType<Record<string,any>>,
    default:()=>({})
  },
  color:{
    type:String,
    default:'#82848a'
  },
  height: {
    type: [Number, String] as PropType<number | string>,
    default: 160
  },
  width: {
    type: [Number, String] as PropType<number | string>,
    default: 160
  },
  // 可删除
  deletable: {
    type: Boolean as PropType<boolean>,
    default: true
  },
  // 文件上传的类型
  fileType: {
    type: String as PropType<'image' | 'video'>,
    default: 'image'
  },
  // 文件最大尺寸，默认5mb
  fileMaxSize:{
    type:Number,
    default:5*1024*1024
  },
  // multiple	图片多选上传,部分安卓机型不支持
  multiple: {
    type: Boolean,
    default: false
  },
  // 图片或者视频选取模式，当accept为image | media 类型时设置capture可选值为camera可以直接调起摄像头
  capture: {
    type: [String,Array] as PropType<'album' | 'album' | Capture[]>,
    default: ()=>['album', 'camera']
  },
  // 所选的图片的尺寸, 可选值为original compressed
  imageSizeType: {
    type: [String,Array] as PropType<ImageSizeType|ImageSizeType[]>,
    default:()=>['original', 'compressed']
  },
  // 当fileType为video时生效,是否压缩视频，默认为true
  compressed: {
    type: Boolean as PropType<boolean>,
    default: true
  },
  useMaskLayer:{
    type: Boolean as PropType<boolean>,
    default: true
  },
  //当fileType为video时生效,拍摄视频最长拍摄时间,单位秒
  maxDuration: {
    type: Number,
    default: 60
  },
  showList:{
    type: Boolean as PropType<boolean>,
    default: true
  },
  // 当fileType为video时生效,可选值为back或front（
  camera:{
    type: String as PropType<'back'|'front'>,
    default: 'back'
  },	
  maxCount:{
    type:Number as PropType<number>,
    default:9
  },			
  round: {
    type: Number as PropType<number>,
    default: 16
  },
  deleteIconColor: {
    type: String as PropType<string>,
    default: '#494949'
  },
  addIconSize: {
    type: Number as PropType<number>,
    default: 60
  },
  disabled: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  onRemoveFile: {
    type: [Promise, Function, Boolean] as PropType<Promise<boolean> | ((item:FileLoadOrUniFileType) => boolean) | boolean>,
    default: () => ((item: FileLoadOrUniFileType) => true)
  },
  deleteIconSize: {
    type: Number as PropType<number>,
    default: 50
  },
  deleteIconName: {
    type: String as PropType<string>,
    default: 'icon-close-circle'
  },
  beforeUpload:{
    type: Function,
    default: null
  },
  afterUpload:{
    type: Function,
    default: null
  },
} as const


export type UploadProps = ExtractDefaultPropTypes<typeof uploadProps>
