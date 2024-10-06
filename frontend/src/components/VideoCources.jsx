function VideoCourses() {
  const styles = {
    videoHeading: {
      height: "60px", // Fixed height to avoid wrapping
      lineHeight: "1.2em", // Line spacing
      textAlign: "center",
      color: "white",
      fontSize: "1.875rem", // Equivalent to 3xl in Tailwind
      fontWeight: "600", // Semibold
      marginBottom: "1rem", // mb-4
    },
    videoContainer: {
      width: "100%",
      height: "24rem", // Equivalent to h-96 in Tailwind
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    videoWrapper: {
      width: "100%",
      maxWidth: "64rem", // Equivalent to max-w-4xl
      marginBottom: "3rem", // Equivalent to gap-12
    },
    mainContainer: {
      minHeight: "100vh", // Full viewport height
      width: "100vw", // Full viewport width
      backgroundColor: "black",
      paddingTop: "2.5rem", // Equivalent to py-10
      textAlign: "center",
    },
    contentContainer: {
      maxWidth: "80rem", // Equivalent to max-w-7xl
      marginLeft: "auto",
      marginRight: "auto",
    },
    centerAlign: {
      display: "flex",
      justifyContent: "center",
    },
  };

  return (
    <div style={styles.mainContainer}>
      <div style={styles.contentContainer}>
        <h1
          style={{
            fontSize: "3rem", // 5xl
            fontWeight: "bold",
            color: "white",
            marginBottom: "2.5rem", // mb-10
          }}
        >
          Video Courses
        </h1>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", justifyItems: "center" }}>
          {/* Lecture 1 */}
          <div style={styles.videoWrapper}>
            <h2 style={styles.videoHeading}>Fundamental Properties of Light</h2>
            <div style={styles.videoContainer}>
              <iframe
                className="w-full h-full rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/wpgzPFXIUpM"
                title="Fundamental Properties of Light"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Lecture 2 */}
          <div style={styles.videoWrapper}>
            <h2 style={styles.videoHeading}>What Determines the Color We See?</h2>
            <div style={styles.videoContainer}>
              <iframe
                className="w-full h-full rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/3ZWF-29SLJo"
                title="What Determines the Color We See?"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Lecture 3 */}
          <div style={styles.videoWrapper}>
            <h2 style={styles.videoHeading}>How Does the Atmosphere Interact With Light?</h2>
            <div style={styles.videoContainer}>
              <iframe
                className="w-full h-full rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/5tfvCSWQczA"
                title="How Does the Atmosphere Interact With Light?"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Lecture 4 */}
          <div style={styles.videoWrapper}>
            <h2 style={styles.videoHeading}>How Does the Ocean Interact With Light?</h2>
            <div style={styles.videoContainer}>
              <iframe
                className="w-full h-full rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/DWCfyr9W830"
                title="How Does the Ocean Interact With Light?"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Lecture 5 */}
          <div style={{ ...styles.videoWrapper, gridColumn: "span 2", justifySelf: "center" }}>
            <h2 style={styles.videoHeading}>Breaking Down Light Makes it All Add Up</h2>
            <div style={styles.videoContainer}>
              <iframe
                className="w-full h-full rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/cpSDlzoi2S8"
                title="Breaking Down Light Makes it All Add Up"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        <p style={{ marginTop: "2.5rem", color: "#9ca3af" }}>This is the Video Courses page.</p>
      </div>
    </div>
  );
}

export default VideoCourses;