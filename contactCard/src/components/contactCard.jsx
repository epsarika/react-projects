import { contactCard, head, body, profileImg, footer } from "./ContactCard.module.css"
export default function ContctCard({ name, phone, email, image }) {
    return (
        <div className={contactCard}>
            <div className={head} >
                <div className={profileImg}>
                    <img src={image} alt="" />
                </div>
            </div>
            <div className={body}>
                <h2>{name}</h2>
                <p>Phone : {phone}</p>
                <p>E-Mail : {email}</p>
            </div>
            <div className={footer}></div>
        </div>
    );
}