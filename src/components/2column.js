import React from 'react'



export default ({ switches, content1, content2 ,colSize1, colSize2, before, after}) => (


  <div className={ `layout-2-col ${ switches }` }>
    <div className="component">
      {
      before ? before() : null
      }
      <div className="container">

        <div className={colSize1}>
        {content1 ? content1() : null}
        </div>
        <div className={colSize2}>
        {content2 ? content2() : null}
        </div>

      </div>

      {
        after ? after() : null
     }

    </div>


  </div>
)
