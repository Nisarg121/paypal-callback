const CancelPage = () => {
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
        <h1 style={{ color: "#FF6347" }}>Payment Unsuccessful</h1>
        <p style={{ color: "#666" }}>
          We{"'"}re sorry, but your payment could not be processed at this time.
        </p>
        <p>Please try again or contact our support team for assistance.</p>
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

export default CancelPage;
