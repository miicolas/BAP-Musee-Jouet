export const PageHeader = ({ avatarName, textColor }) => (
  <div className="flex flex-col items-center gap-5 mx-auto -translate-x-10">
    <div>
      <p className={`text-5xl font-bold ${textColor}`}>
        {avatarName || "Avatar introuvable"}
      </p>
    </div>
    <div>
      <p className={`${textColor} font-bold text-2xl`}>Choisis ta question</p>
    </div>
  </div>
);
