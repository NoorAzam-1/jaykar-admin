const Settings = () => {
  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Settings</h1>

      <div className="bg-white p-4 rounded shadow space-y-2">
        <p>App Version: 1.0.0</p>
        <p>Payment Gateway: Razorpay</p>
        <p>Default Radius: 50 KM</p>
      </div>
    </div>
  );
};

export default Settings;
