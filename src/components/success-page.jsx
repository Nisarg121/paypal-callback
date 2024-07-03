const SuccessPage = () => {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f0f0f0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        margin: "10px",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "40px",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          textAlign: "center",
        }}
      >
        <h1 style={{ color: "#4CAF50" }}>Payment Successful!</h1>
        <p style={{ color: "#666" }}>
          Thank you for your purchase. Your transaction has been completed
          successfully.
        </p>
        <p
          style={{
            marginTop: "20px",
            fontStyle: "italic",
            color: "#666",
          }}
        >
          Redirecting...
        </p>
      </div>
    </div>
  );
};

export default SuccessPage;
