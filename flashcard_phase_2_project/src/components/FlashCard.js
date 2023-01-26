import {MdDeleteForever} from 'react-icons/md'
import {MdFavorite} from 'react-icons/md'
import {MdFavoriteBorder} from 'react-icons/md'
import {FaPencilAlt} from 'react-icons/fa'
import {Link} from 'react-router-dom'


function FlashCard({card, onDeleteCard, toggleFavorite, setEditCard, handleEditClick}) {
    
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

    const onEditClick = () => {
       //  setEditCard(card)
       handleEditClick(card)
    }

    return (
        <>
            <div className="questionCard">
            <div className="btn_container">    
                    <figure className='favorite_btn'                 
                        type="text"
                        value={favorite}
                        onClick={(e) => {
                            e.stopPropagation()
                            handleToggleFavorite(id, e.target.value)}}
                        >{card.favorite?  <MdFavorite/> : <MdFavoriteBorder/>}
                    </figure>
                </div>
                <h2 className="front" style={{fontSize: 50}}>{title}</h2>
                <p className="question"style={{fontSize: 30}}> Q: {question}</p>
                <div className="btn_container">
                    <Link to = {`/cards/${id}/edit`} onClick={onEditClick}
                    className='edit_btn'><FaPencilAlt/></Link>
                    {/* <h1 className='edit_btn'><FaPencilAlt/></h1> */}
                    <h1 className='delete_btn' onClick={handleDeleteClick}><MdDeleteForever /></h1> 
                </div>        
            </div>
            <div className='answerCard' style={{background: '#1dace6'}}>
                <p className="answer">{answer}<img className="image" src={image}/></p> 
            </div>
        </>

    );
  }



export default FlashCard