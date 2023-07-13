import { IconProps, iconProps } from "../../components/v-icon/v-icon"
export type PartialIconProps = Partial<IconProps>
export function genDefaultObjectProps(Props: PartialIconProps={
  color:iconProps.color.default,
  size:iconProps.size.default, 
  imgMode:iconProps.imgMode.default,
  name:iconProps.name.default,
  rota:iconProps.rota.default,
  animationName:iconProps.animationName.default,
  animationDuration:iconProps.animationDuration.default,
  animationTimingFunction:iconProps.animationTimingFunction.default,
  animationIterationCount:iconProps.animationIterationCount.default
}){
  return {
    color:Props.color,
    size:Props.size,
    imgMode:Props.imgMode,
    name:Props.name,
    rota:Props.rota,
    animationName:Props.animationName,
    animationDuration:Props.animationDuration,
    animationTimingFunction:Props.animationTimingFunction,
    animationIterationCount:Props.animationIterationCount
  }
}