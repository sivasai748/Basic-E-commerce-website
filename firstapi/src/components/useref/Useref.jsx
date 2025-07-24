import { useRef } from "react"

function Useref(){
    var obj=useRef("sivasai")
      const get=()=>{
        console.log(obj.current)
        obj.current="krishna"
        console.log(obj.current)

       }
    return(
        <div>
       <h1>useref components:{obj.current}</h1>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate aperiam provident facere sed tempora autem reiciendis incidunt voluptates earum repellendus! Voluptatibus illo nemo, repellat velit sit nisi, aspernatur quia ab blanditiis quas corporis vitae, aliquid officiis ipsa ipsam cum sapiente repellendus. Obcaecati sequi ab doloremque quod quae ducimus deleniti reprehenderit recusandae voluptas. Ab quibusdam, tenetur quam temporibus beatae est voluptates suscipit. Quidem doloribus deserunt in voluptas minima corrupti harum quis, eos repellat nisi, cum cupiditate labore! Mollitia aut, error asperiores deserunt aspernatur debitis quod voluptatibus modi quidem rem enim placeat, similique, magni dolorem perferendis in. Accusantium dolorum fuga exercitationem corrupti.</p>
        <button onClick={get} className="btn btn-secondary">read more</button>
        
        </div>
    )
}
export default Useref