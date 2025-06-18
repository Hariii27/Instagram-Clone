import React from 'react'
import { useParams , Link , useNavigate} from 'react-router-dom'
import { useEffect,useState } from 'react'
import Stories from './Stories';
function Viewstory() {

    const navigate = useNavigate();

    const { id , tot } = useParams();

    const [story, setStory] = useState(null);
    useEffect(() => {
        fetch(`http://localhost:3000/Stories/${id}`)
            .then(data => data.json())
            .then(data => setStory(data))
            .catch(error => console.error('Error fetching story:', error));
    }, [id]);


    if(id>tot || id<=0){
        navigate('/');
    }

  return (
    <div>
        {Stories? <div className='d-flex justify-content-center  align-items-center'>       
            <Link to={`http://localhost:5173/Stories/${Number(id)-1}/${tot}`}><i className='bi bi-arrow-left-circle-fill'></i></Link>
            <img className='vh-100 ' src = {Stories.image} alt='title' />
            <Link to={`http://localhost:5173/Stories/${Number(id)+1}/${tot}`}><i className='bi bi-arrow-right-circle-fill'></i></Link>

            </div>:
            <div>
               Loadingg
            </div>}
    </div>
  )

}

export default Viewstory