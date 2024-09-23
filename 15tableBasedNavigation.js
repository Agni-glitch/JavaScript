let t=document.body.firstElementChild.firstElementChild
    console.log(t.rows)//[tr,tr,tr,tr]
    console.log(t.caption)//caption
    console.log(t.tHead.firstElementChild)//tr
    console.log(t.tFoot)//null
    console.log(t.tBodies)//[tbody]
    console.log(t.rows[0].cells)//[th,th,th,th]
    console.log(t.rows[1].sectionRowIndex)//0
    console.log(t.rows[1].rowIndex)//1
    console.log(t.rows[0].cells[1].cellIndex)//1