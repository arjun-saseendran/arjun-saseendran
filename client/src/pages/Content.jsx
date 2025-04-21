import { Card } from "../components/card/Card"
import { Projects } from "../components/projects/Projects"

export const Content = () => {
  return (
    
    <div className="grid md:grid-cols-2 my-8 gap-2 md:gap-0">
      <div>
      <Card/>
      </div>
      <div>
      <Projects/>
      </div>
      
    </div>
    
    
  )
}