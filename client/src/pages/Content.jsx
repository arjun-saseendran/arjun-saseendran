import { Card } from "../components/card/Card"
import { Projects } from "../components/projects/Projects"

export const Content = () => {
  return (
    
    <div className="grid md:grid-cols-2 my-8">
      <Card/>
      <Projects/>
      
    </div>
    
    
  )
}