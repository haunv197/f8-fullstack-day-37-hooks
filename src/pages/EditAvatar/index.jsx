import { useEffect, useState } from "react";
import placeholderAvatar from "@/assets/images/placeholder-avatar.png";

const styles = {
  avatar: {
    width: 200,
    height: 200,
    borderRadius: "50%",
    textAlign: "center",
    marginBottom: "0.5rem",
  },
};

function EditAvatar() {
  const [avatarUrl, setAvatarUrl] = useState();

  const handleChangeAvatar = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const newAvatarUrl = URL.createObjectURL(file);
    setAvatarUrl(newAvatarUrl);
  };

  useEffect(() => {
    return () => {
      URL.revokeObjectURL(avatarUrl);
    };
  }, [avatarUrl]);

  return (
    <div>
      <label
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <input
          type="file"
          hidden
          accept="image/*"
          onChange={handleChangeAvatar}
        />
        <img
          style={styles.avatar}
          src={avatarUrl || placeholderAvatar}
          alt="Avatar"
        />
        <span>Click để chọn ảnh</span>
      </label>
    </div>
  );
}

export default EditAvatar;
