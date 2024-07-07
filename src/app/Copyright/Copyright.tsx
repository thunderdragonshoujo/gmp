import { Card } from '@/components/ui/card';
import React from 'react'

const Copyright = () => {
  return (
    <div className='flex justify-center'>
      <Card className='flex justify-center w-1/3 m-4'>
        <div className="Copyright">
          <h2>Copyright:</h2>
            <ul>
              <li>This site and all of its contents are Copyright Global Microwave Parts 2021</li>
            </ul>
            <br />
         </div>
       </Card>
     </div>
  )
}

export default Copyright
