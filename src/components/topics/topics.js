import styles from "./topics.module.css"
import TopicButton from "./topicButton";
function topics(props) {
    return (
        <div className={styles.topics}>
            <nav>
                Please select from this list of topics
            </nav>
                <TopicButton name="Finance" onClick={props.onClick}/>
                <TopicButton name="Technology"/>
                <TopicButton name="Sports"/>
                <TopicButton name="Stocks"/>
                <TopicButton name="Politics"/>
                <TopicButton name="Travel"/>
                <TopicButton name="Marketing"/>
                <TopicButton name="Global issues"/>
        </div>
    )
}

export default topics;