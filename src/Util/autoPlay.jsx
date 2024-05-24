
export default function Autoplay() {
    return (
        <div>
            <video controls autoPlay>
                <source src="./aivideo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}