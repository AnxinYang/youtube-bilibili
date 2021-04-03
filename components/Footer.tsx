import styles from '../styles/Footer.module.css'
export default function Footer() {
    return (
        <div className={styles.container}>
            <p><span>Created by Anxin Yang. Follow me at:</span></p>
            <ul>
                <li><a href="https://www.linkedin.com/in/anxin-yang-707029125/">LinkedIn</a></li>
            </ul>
            <p className='hint'>
                This website is intent for code and style demonstration only. All contents is fetch from Youtube API.
            </p>
        </div>
    )
}