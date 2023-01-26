import {MdDeleteForever} from 'react-icons/md'
import {MdFavorite} from 'react-icons/md'
import {MdFavoriteBorder} from 'react-icons/md'
import {FaPencilAlt} from 'react-icons/fa'


function FlashCard({card, onDeleteCard, toggleFavorite}) {
    
    const {id, title, question, answer, image, favorite} = card

    // Delete Card From Server
    function handleDeleteClick() {
        fetch(`http://localhost:8001/card/${id}`, {
            method: "DELETE",
        })
        .then(()=>onDeleteCard(id))
        .catch(err => alert('Failed to Delete Card'))
    }

    //used to toggle favorite (true or false)
    const handleToggleFavorite = (id, favorite) => {
       

        fetch(`http://localhost:8001/card/${id}`, {
            method: "PATCH",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                favorite: !card.favorite
            }),
        })
        .then(response => response.json())
        .then(() => {
            toggleFavorite(id)
        })
        .catch(error => (console.error(error)))
    }
    

    return (
        <>
            <div className="card">
                <h2 style={{fontSize: 50}}>{title}</h2>
                <h2 style={{fontSize: 30}}> Q: {question}</h2> 
                <h1 onClick={handleDeleteClick}><MdDeleteForever /></h1>
                <h1><FaPencilAlt/></h1>
                <h1 className='favorite_btn'                 
                    type="text"
                    value={favorite}
                    onClick={(e) => {
                        e.stopPropagation()
                        handleToggleFavorite(id, e.target.value)}}
                >{card.favorite?  <MdFavorite/> : <MdFavoriteBorder/>}</h1>
            </div>
            <div className='card' style={{background: '#1dace6'}}>
                <h2>{answer}<img className="image" src={image}/></h2> 
            </div>
        </>

    );
  }



export default FlashCard