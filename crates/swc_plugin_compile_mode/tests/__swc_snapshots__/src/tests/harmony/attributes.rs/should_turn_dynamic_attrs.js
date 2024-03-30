const TARO_TEMPLATES_f0t0 = `import { FlexManager } from './utils/FlexManager'
import { getNodeThresholds, getNormalAttributes, getTextAttributes } from './utils/helper'
import { TaroIgnoreElement, eventHandler, DynamicCenter, getComponentEventCallback, AREA_CHANGE_EVENT_NAME, VISIBLE_CHANGE_EVENT_NAME } from '../runtime'
import type { TaroElement } from '../runtime'
import { TOUCH_EVENT_MAP } from './utils/constant/event'
@Extend(Flex)
function attrs ({
  flexBasis,
  flexGrow,
  flexShrink,
  alignSelf,
  clip,
  width,
  height,
  margin,
  padding,
  linearGradient,
  zIndex,
  borderStyle,
  borderWidth,
  borderColor,
  borderRadius,
  opacity,
  backgroundColor,
  backgroundImage,
  backgroundRepeat,
  backgroundImageSize,
  constraintSize,
  rotate,
  scale,
  translate,
  transform
}) {
  .flexGrow(flexGrow)
  .flexShrink(flexShrink)
  .flexBasis(flexBasis)
  .alignSelf(alignSelf)
  .width(width)
  .height(height)
  .constraintSize(constraintSize)
  .margin(margin)
  .padding(padding)
  .linearGradient(linearGradient)
  .zIndex(zIndex)
  .borderStyle(borderStyle)
  .borderWidth(borderWidth)
  .borderColor(borderColor)
  .borderRadius(borderRadius)
  .opacity(opacity)
  .backgroundColor(backgroundColor)
  .backgroundImage(backgroundImage, backgroundRepeat)
  .backgroundImageSize(backgroundImageSize)
  .rotate(rotate)
  .scale(scale)
  .translate(translate)
  .transform(transform)
  .clip(clip)
}
@Extend(Image)
function attrsImage ({
  flexBasis,
  flexGrow,
  flexShrink,
  alignSelf,
  clip,
  width,
  height,
  margin,
  padding,
  linearGradient,
  zIndex,
  borderStyle,
  borderWidth,
  borderColor,
  borderRadius,
  opacity,
  backgroundColor,
  backgroundImage,
  backgroundRepeat,
  backgroundImageSize,
  constraintSize,
  rotate,
  scale,
  translate,
  transform
}) {
  .flexGrow(flexGrow)
  .flexShrink(flexShrink)
  .flexBasis(flexBasis)
  .alignSelf(alignSelf)
  .width(width)
  .height(height)
  .constraintSize(constraintSize)
  .margin(margin)
  .padding(padding)
  .linearGradient(linearGradient)
  .zIndex(zIndex)
  .borderStyle(borderStyle)
  .borderWidth(borderWidth)
  .borderColor(borderColor)
  .borderRadius(borderRadius)
  .opacity(opacity)
  .backgroundColor(backgroundColor)
  .backgroundImage(backgroundImage, backgroundRepeat)
  .backgroundImageSize(backgroundImageSize)
  .rotate(rotate)
  .scale(scale)
  .translate(translate)
  .transform(transform)
  .clip(clip)
  .objectFit(ImageFit.Contain)
}
@Component
struct TARO_TEMPLATES_f0t0 {
  nodeInfoMap: any = {}
  dynamicCenter: DynamicCenter
  @ObjectLink node: TaroElement

  aboutToAppear () {
    this.dynamicCenter = new DynamicCenter()
    this.dynamicCenter.bindComponentToNodeWithDFS(this.node, this)
  }

  @State node0: TaroElement = new TaroIgnoreElement()
  @State node1: TaroElement = new TaroIgnoreElement()
  @State node2: TaroElement = new TaroIgnoreElement()
  @State node3: TaroElement = new TaroIgnoreElement()
  @State node4: TaroElement = new TaroIgnoreElement()
  @State node5: TaroElement = new TaroIgnoreElement()
  
  build() {
    Flex(FlexManager.flexOptions(this.node0)) {
      Flex(FlexManager.flexOptions(this.node1)) {
        Flex(FlexManager.flexOptions(this.node2)) {}
        .attrs(getNormalAttributes(this.node2))
        .onVisibleAreaChange(getNodeThresholds(this.node2) || [0.0, 1.0], getComponentEventCallback(this.node2, VISIBLE_CHANGE_EVENT_NAME))
        .onAreaChange(getComponentEventCallback(this.node2, AREA_CHANGE_EVENT_NAME, ({ eventResult }) => {
          const [_, areaResult] = eventResult
          this.nodeInfoMap[this.node2._nid].areaInfo = areaResult
        }))
        Flex(FlexManager.flexOptions(this.node1.childNodes[1])) {}
        .attrs(getNormalAttributes(this.node1.childNodes[1]))
        .onVisibleAreaChange(getNodeThresholds(this.node1.childNodes[1]) || [0.0, 1.0], getComponentEventCallback(this.node1.childNodes[1], VISIBLE_CHANGE_EVENT_NAME))
        .onAreaChange(getComponentEventCallback(this.node1.childNodes[1], AREA_CHANGE_EVENT_NAME, ({ eventResult }) => {
          const [_, areaResult] = eventResult
          this.nodeInfoMap[this.node1.childNodes[1]._nid].areaInfo = areaResult
        }))
        Flex(FlexManager.flexOptions(this.node3)) {
          Flex(FlexManager.flexOptions(this.node4)) {}
          .attrs(getNormalAttributes(this.node4))
          .onVisibleAreaChange(getNodeThresholds(this.node4) || [0.0, 1.0], getComponentEventCallback(this.node4, VISIBLE_CHANGE_EVENT_NAME))
          .onAreaChange(getComponentEventCallback(this.node4, AREA_CHANGE_EVENT_NAME, ({ eventResult }) => {
            const [_, areaResult] = eventResult
            this.nodeInfoMap[this.node4._nid].areaInfo = areaResult
          }))
        }
        .attrs(getNormalAttributes(this.node3))
        .onVisibleAreaChange(getNodeThresholds(this.node3) || [0.0, 1.0], getComponentEventCallback(this.node3, VISIBLE_CHANGE_EVENT_NAME))
        .onAreaChange(getComponentEventCallback(this.node3, AREA_CHANGE_EVENT_NAME, ({ eventResult }) => {
          const [_, areaResult] = eventResult
          this.nodeInfoMap[this.node3._nid].areaInfo = areaResult
        }))
      }
      .attrs(getNormalAttributes(this.node1))
      .onVisibleAreaChange(getNodeThresholds(this.node1) || [0.0, 1.0], getComponentEventCallback(this.node1, VISIBLE_CHANGE_EVENT_NAME))
      .onAreaChange(getComponentEventCallback(this.node1, AREA_CHANGE_EVENT_NAME, ({ eventResult }) => {
        const [_, areaResult] = eventResult
        this.nodeInfoMap[this.node1._nid].areaInfo = areaResult
      }))
      Image(this.node0.childNodes[1].getAttribute('src'))
      .attrsImage(getNormalAttributes(this.node0.childNodes[1]))
      .onVisibleAreaChange(getNodeThresholds(this.node0.childNodes[1]) || [0.0, 1.0], getComponentEventCallback(this.node0.childNodes[1], VISIBLE_CHANGE_EVENT_NAME))
      .onAreaChange(getComponentEventCallback(this.node0.childNodes[1], AREA_CHANGE_EVENT_NAME, ({ eventResult }) => {
        const [_, areaResult] = eventResult
        this.nodeInfoMap[this.node0.childNodes[1]._nid].areaInfo = areaResult
      }))
      Image(this.node5.getAttribute('src'))
      .attrsImage(getNormalAttributes(this.node5))
      .onVisibleAreaChange(getNodeThresholds(this.node5) || [0.0, 1.0], getComponentEventCallback(this.node5, VISIBLE_CHANGE_EVENT_NAME))
      .onAreaChange(getComponentEventCallback(this.node5, AREA_CHANGE_EVENT_NAME, ({ eventResult }) => {
        const [_, areaResult] = eventResult
        this.nodeInfoMap[this.node5._nid].areaInfo = areaResult
      }))
    }
    .attrs(getNormalAttributes(this.node0))
    .onVisibleAreaChange(getNodeThresholds(this.node0) || [0.0, 1.0], getComponentEventCallback(this.node0, VISIBLE_CHANGE_EVENT_NAME))
    .onAreaChange(getComponentEventCallback(this.node0, AREA_CHANGE_EVENT_NAME, ({ eventResult }) => {
      const [_, areaResult] = eventResult
      this.nodeInfoMap[this.node0._nid].areaInfo = areaResult
    }))
  }
}
export default TARO_TEMPLATES_f0t0
`;
function Index() {
    return <View compileMode="f0t0" _dynamicID="node0">

            <View class={myClass} _dynamicID="node1">

              <View style={myStyle} customProp={myCustomProp} _dynamicID="node2"></View>

              <View class="center"/>

              <View onTouch={myTime} _dynamicID="node3">

                <View hoverClass={myHoverClass} _dynamicID="node4"></View>

              </View>

            </View>

            <Image alt="占位符" src="https://www.jd.com/test.jpg"/>

            <Image alt="占位符" src={src} _dynamicID="node5"/>

          </View>;
}
