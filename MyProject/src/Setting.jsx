const Setting = ({ setting, setSetting, box, setBox }) => {
    console.log("하하하");

    return (
        <div>
            <div className="SettingBg" onClick={() => setSetting(false)} />
            <div className="SetWindow">
                <div >
                    {/* <input type="button" onClick={() => set} /> */}
                </div>
                <button type="button" onClick={() => {
                    setBox([
                        ...box,
                        {
                            gr: "NEW",
                            bg: "#ffff7f",
                        },
                    ]);
                }}>Add a Row Above</button>
            </div>
        </div>
    );
}

export default Setting;