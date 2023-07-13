export function createNamespace(name:string){
  const prefixName=`v-${name}`;

  return createBEM(prefixName)
}

function _bem(prefixName:string,blockSuffix:string,element:string,modifier:string){
   if(blockSuffix){
    prefixName+=`-${blockSuffix}`
   }
   if(element){
    prefixName+=`__${element}`
   }
   if(modifier){
    prefixName+=`--${modifier}`
   }
   return prefixName
}

function createBEM(prefixName:string){
  const b=(blockSuffix='')=>_bem(prefixName,blockSuffix,'','')
  const e=(element='')=> element ? _bem(prefixName,'',element,'') :''
  const m=(modifier='')=> modifier ? _bem(prefixName,'',modifier,'') :''

  const be=(blockSuffix='',element='')=> blockSuffix&&element ?  _bem(prefixName,blockSuffix,element,'') :''
  const bm=(blockSuffix='',modifier='')=> blockSuffix&&modifier ?  _bem(prefixName,blockSuffix,modifier,'') :''
  const em=(element="",modifier='',)=> element&&modifier ?  _bem(prefixName,'',element,modifier) :''
  const bem=(blockSuffix='',element="",modifier='',)=> blockSuffix&&element&&modifier ?  _bem(prefixName,blockSuffix,element,modifier) :''

  const is=(name:string,state:string|boolean)=>{
    state ? `is-${name}` :''
  }
  return {
    b,
    e,
    m,
    be,
    bm,
    em,
    bem,
    is
  }
}

// test

// const bem=createNamespace('button')
// console.log('b',bem.b('box'))
// console.log('e',bem.e('element'))
// console.log('m',bem.m('modifier'))
// console.log('ben',bem.bem('box','element','modifier'))