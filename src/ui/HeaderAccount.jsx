function HeaderAccount() {
  return (
    <div className="relative mb-20">
      <div className="h-52 w-full overflow-hidden bg-cover bg-top">
        <img src="/owner-bg-image-4.jpg" alt="ownersImage" />
      </div>

      <div className="absolute left-12 top-44 h-36 w-36 ">
        <img
          src="/default-user.jpg"
          alt="usersImage"
          className="rounded-full  border-4 border-gray-50"
        />
      </div>
      <h1 className="ml-56 py-8 text-4xl font-semibold text-gray-800">
        Your account
      </h1>
    </div>
  );
}

export default HeaderAccount;
