import styled from 'styled-components'
import { media } from '../../utils/styledHelper'

export const IntroWrapper = styled.div`
  .voucher-title {
    font-weight: normal;
    
    ${media.maxTablet`
      font-size: 20px;
      margin-bottom: 5px;
    `}
  }
  
  .voucher-title-detail {
    font-size: 16px;
    line-height: 1.5;
    
    ${media.minTablet`
      font-size: 18px;
   `}
    
    ${media.maxTablet`
      margin: 0 -1rem;
    `}
  }
`

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 150px;
  
  ${media.minTablet`
    height: 185px;
  `}
  
  .logo-img {
    max-width: 124px;
    height: auto;
    
    ${media.minTablet`
      max-width: 104px;
    `}
  }
`

export const BarCodeWrapper = styled.div`
  .voucher-expiry {
    font-size: 16px;
    line-height: 1.5;
    
    ${media.minTablet`
      font-size: 18px;
    `}
  }
  .tokenWidth {
    font-size:30px;
    width:210px;
    border:1px solid #ccc;
    text-align:center;
    padding-right:4px;
  }
  .copyData {
    position: relative;
    display: inline-block;
    padding: 0;
    width: 50px;
    height:100%;
    font-size: 13px;
    font-weight: 700;
    line-height: 20px;
    color: #333;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    background-color: #eee;
    background-image: linear-gradient(#fcfcfc,#eee);
    border: 1px solid #d5d5d5;
    border-radius: 3px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-appearance: none;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    margin-left: -4px;
}
.copyData:hover, .copyData:active {
    text-decoration: none;
    background-color: #ddd;
    background-image: linear-gradient(#eee,#ddd);
    border-color: #ccc;
}
.copyData img {
  width: 20px;
  height: 20px;
  margin:0 auto;
  display: block;
}
.hide {
  display:none;
}
.toolTip {
  display: block;
  width: 80px;
  background: rgba(0,0,0,.8);
  color: #fff;
  padding: 3px;
  box-sizing: border-box;
  <RightArrowIcon className='store-btn-icon' />       <span>{ CustomIntl(voucher,"callText") }</span>     </Button>     : 5px;
  position: absolute;
  top: 50px;
  right: -20px;
  transition:all .5s;
  -webkit-transition:all .5s;
  -ms-transition:all .5s;
  opacity:0;
}
.active .toolTip {
  opacity:1;
  top:42px;
}
.relative_position {
  position:relative;
}
.toolTip:before {
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid rgba(0,0,0,.8);
  display: block;
  content: '';
  position: relative;
  bottom: 8px;
  left: 31px;
}
.flex-element {
  display:flex;
  display:-webkit-flex;
  display:-ms-flex;
  justify-content:center;
  -webkit-justify-content:center;
  -ms-justify-content:center;
  margin-bottom:20px;
}
.copyData:active {
  background-color:#ebebeb;
}
`

export const FooterWrapper = styled.div`
  width: 100%;
  margin-top: 48px;
`

export const StoresCTAWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 48px;
  
  ${media.minTablet`
    width: 50%;
    justify-content: center;
  `}
  
  ${media.minDesktop`
    width: 33.33%;
  `}
  
  .store-btn-icon {
    font-size: 22px;
    color: #fff !important;
    margin-right: 5px !important;
  }
`

export const SliderWrapper = styled.div`
  width: 100%;
  
  .horizontal-slider {
    width: 100%;
    height: 50px;
    border: 1px solid grey;
    border-radius: 100px;
    touch-action: none;
  }
  .handle {
    font-size: 0.9em;
    text-align: center;
    background-color: black;
    color: white;
    cursor: pointer;
  }
  .handle.active {
    background-color: grey;
  }
  .bar {
    position: relative;
    background: #ddd;
  }
  .bar.bar-1 {
    background: #f00;
  }
  .bar.bar-2 {
    background: #0f0;
  }
  .horizontal-slider .bar {
    top: 20px;
    height: 10px;
  }
  .horizontal-slider .handle {
    top: 0px;
    width: 50px;
    height: 48px;
    line-height: 48px;
    border-radius: 100%;
    background: ${props => props.color};
    font-size: 2.5em;
  }
  #slider-container {
    margin: 10px 0px;
    width:100%;
    -webkit-touch-callout: none; /* iOS Safari */
      -webkit-user-select: none; /* Safari */
      -khtml-user-select: none; /* Konqueror HTML */
      -moz-user-select: none; /* Firefox */
          -ms-user-select: none; /* Internet Explorer/Edge */
              user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */
  }
  .slider-label{
    position: absolute;
    margin-top: 15px;
    width: 100%;
    left: 20px;
  }
`
