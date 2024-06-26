import React, {useState} from 'react'
import './AdminScreen.css'

export const AdminScreen = () => {
    const [movie, setMovie] = useState();
    const [movieURL, setMovieURL] = useState();
    const [drag, setDrag] = useState(false);
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
        setMovieURL(fileReader.result);
    }
    const handleOnChange = (event) => {
        event.preventDefault();
        if (event.target.files && event.target.files.length) {
            const file = event.target.files[0];
            setMovie(file);
            fileReader.readAsDataURL(file);
        }
    };
    const handleDrop = (event) => {
        event.preventDefault();
        event.stopPropagation();
        if (event.dataTransfer.files && event.dataTransfer.files.length) {
            setMovie(event.dataTransfer.files[0]);
            fileReader.readAsDataURL(event.dataTransfer.files[0]);
        }
    };

    const handleDragEmpty = (event) => {
        event.preventDefault();
        event.stopPropagation();
    }

    function dragStartHandler(e) {
        e.preventDefault();
        setDrag(true);
    }

    function dragLeaveHandler(e) {
        e.preventDefault();
        setDrag(false);
    }

    function onDropHandler(e) {
        e.preventDefault();
        let files = [...e.dataTransfer.files]
        const formData = new FormData()
        formData.append('file', files[0])

        setDrag(false)
    }
    return (
        <div className="adminScreen">
            <div className="signInNav">
                <img
                    className="signInScreenLogo"
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzOTUuNTIgODUuMDQ3NzQ0MzU0MDExOTciIGhlaWdodD0iODUuMDQ3NzQ0MzU0MDExOTciIHdpZHRoPSIzOTUuNTIiPjxnPjxzdmcgdmlld0JveD0iMCAwIDM5NS41MiA4NS4wNDc3NDQzNTQwMTE5NyIgaGVpZ2h0PSI4NS4wNDc3NDQzNTQwMTE5NyIgd2lkdGg9IjM5NS41MiI+PGc+PHN2ZyB2aWV3Qm94PSIwIDAgMzk1LjUyIDg1LjA0Nzc0NDM1NDAxMTk3IiBoZWlnaHQ9Ijg1LjA0Nzc0NDM1NDAxMTk3IiB3aWR0aD0iMzk1LjUyIj48ZyBpZD0idGV4dGJsb2NrdHJhbnNmb3JtIj48c3ZnIHZpZXdCb3g9IjAgMCAzOTUuNTIgODUuMDQ3NzQ0MzU0MDExOTciIGhlaWdodD0iODUuMDQ3NzQ0MzU0MDExOTciIHdpZHRoPSIzOTUuNTIiIGlkPSJ0ZXh0YmxvY2siPjxnPjxzdmcgdmlld0JveD0iMCAwIDM5NS41MiA4NS4wNDc3NDQzNTQwMTE5NyIgaGVpZ2h0PSI4NS4wNDc3NDQzNTQwMTE5NyIgd2lkdGg9IjM5NS41MiI+PGcgdHJhbnNmb3JtPSJtYXRyaXgoMSwwLDAsMSwwLDApIj48c3ZnIHdpZHRoPSIzOTUuNTIiIHZpZXdCb3g9Ii02LjE1MTY3NDc4NjQ2NzE0MiAtMzMuMDQ1NzIzNDM3MjE4MDE1IDIxOC4xMTI0MjM2NTkxOTg5IDUxLjYxMDA0NjM0OTQ4MTM5NCIgaGVpZ2h0PSI4NS4wNDc3NDQzNTQwMTE5NyIgZGF0YS1wYWxldHRlLWNvbG9yPSIjY2IxMTA2Ij48cGF0aCBkPSJNMTYuOTUzIDE0LjE5NHYwbC01LjkyOSAxLjI1M2MtMC4xNDMgMC4wMy0wLjIzOC0wLjAzMS0wLjI4NS0wLjE4NXYwbC0xMy44NjYtMzIuMTc4Yy0wLjA2LTAuMTI0LTAuMDEyLTAuMjAyIDAuMTQ1LTAuMjM1djBsNS41NDctMS4xNzJjMC4xMjQtMC4wMjYgMC4yMTYgMC4wMjIgMC4yNzYgMC4xNDZ2MGw4Ljc0OSAyMS41NTYtMC44MTQtMjMuMjM0YzAuMDA1LTAuMTM3IDAuMDctMC4yMTkgMC4xOTQtMC4yNDV2MGw1LjQ2OS0xLjE1NmMwLjE3Ni0wLjAzNyAwLjI1NSAwLjAxNCAwLjIzNyAwLjE1NHYwbDAuNDYyIDM1LjAxMWMwLjAyIDAuMTU5LTAuMDQyIDAuMjU0LTAuMTg1IDAuMjg1ek0zMS45OTYgMTEuMjl2MGwtNS41ODEgMC45OThjLTAuMTU4IDAuMDI4LTAuMjUtMC4wMzYtMC4yNzktMC4xOTR2MGwtNi0zMy44MjJjLTAuMDIzLTAuMTMxIDAuMDI3LTAuMjA4IDAuMTUxLTAuMjN2MGw1LjUzMi0wLjk5YzAuMTI1LTAuMDIyIDAuMTk5IDAuMDMyIDAuMjIzIDAuMTY0djBsNi4wOTkgMzMuODA0YzAuMDI4IDAuMTU4LTAuMDIgMC4yNDctMC4xNDUgMC4yN3pNNTIuMTMyIDguMzU3djBsLTE1Ljk5NCAyLjMwN2MtMC4xMjUgMC4wMTgtMC4xOTktMC4wNTItMC4yMjMtMC4yMTF2MGwtNC44NTMtMzQuMDA1Yy0wLjAxOS0wLjEzMiAwLjAzNC0wLjIwNyAwLjE2LTAuMjI1djBsMTUuODk2LTIuMjkyYzAuMTMyLTAuMDE5IDAuMjEgMC4wNTQgMC4yMzMgMC4yMTh2MGwwLjc5OCA1LjUzM2MwLjAxOCAwLjEyNS0wLjAzOSAwLjE5OC0wLjE3MSAwLjIxN3YwbC0xMC4xNDUgMS40NjMgMS4xMTUgNy43MyAxMC4xNDUtMS40NjNjMC4xMzItMC4wMTkgMC4yMDcgMC4wMzcgMC4yMjYgMC4xNjl2MGwwLjg1NyA1LjU5NWMwLjAxOSAwLjEzMi0wLjAzNyAwLjIwNy0wLjE2OSAwLjIyN3YwbC0xMC4xOTQgMS40NyAxLjI0NyA4LjY1IDEwLjE5NC0xLjQ3YzAuMTMyLTAuMDE5IDAuMjA5IDAuMDUxIDAuMjMzIDAuMjA5djBsMC44MTUgNS42NTJjMC4wMTkgMC4xMzItMC4wMzcgMC4yMDctMC4xNyAwLjIyNnpNNjYuMzU1IDcuMTR2MGwtNi4wMzkgMC41MDVjLTAuMTQ2IDAuMDEyLTAuMjMzLTAuMDYxLTAuMjU5LTAuMjE5djBsLTguNzUzLTMzLjczOGMtMC4wNDQtMC4xMyAwLTAuMjAxIDAuMTMzLTAuMjEydjBsNS41OS0wLjQ2OGMwLjEzMy0wLjAxMSAwLjIxOCAwLjA0OSAwLjI1NiAwLjE4djBsNS4wNzEgMjIuMjM0IDEuNDA2LTIyLjc3NmMwLjAyMi0wLjEzNiAwLjExMy0wLjIxIDAuMjczLTAuMjI0djBsNC41MDQtMC4zNzdjMC4xMjYtMC4wMTEgMC4yMTIgMC4wNDkgMC4yNTYgMC4xOHYwbDUuMTIxIDIyLjIzIDEuMzU2LTIyLjc3MmMwLjAxNS0wLjEzNSAwLjA5LTAuMjA4IDAuMjIzLTAuMjE5djBsNS41NS0wLjQ2NWMwLjE1OS0wLjAxMyAwLjIyOCAwLjA0OCAwLjIwNiAwLjE4NHYwbC0zLjA3NSAzNC43MjdjLTAuMDA4IDAuMDYxLTAuMDUgMC4xMjEtMC4xMjUgMC4xODF2MGwtMC4wOTQgMC4wNzgtNi4wMjkgMC41MDRjLTAuMSAwLjAwOC0wLjE4OS0wLjA2NC0wLjI2OS0wLjIxOHYwbC00LjA0OC0xNy42NzQtMS4wMzUgMTguMDk5YzAgMC4xNjEtMC4wNzMgMC4yNDctMC4yMTkgMC4yNnpNOTcuNzM0IDUuMzE1djBsLTYuMDU4IDAuMTU5Yy0wLjE0NyAwLjAwNC0wLjIyOS0wLjA3NC0wLjI0Ni0wLjIzM3YwbC03LjgxMy0zNC4xNTZjLTAuMDM3LTAuMTMyIDAuMDI1LTAuMjAxIDAuMTg1LTAuMjA1djBsNS42NjgtMC4xNWMwLjEyNy0wLjAwMyAwLjIwOCAwLjA2MSAwLjI0NSAwLjE5NHYwbDQuNzAyIDIyLjc4NCAzLjQwNS0yMi45OThjMC4wMy0wLjEzNCAwLjEwOC0wLjIwMyAwLjIzNS0wLjIwNnYwbDUuNTg4LTAuMTQ3YzAuMTgtMC4wMDUgMC4yNDggMC4wNiAwLjIwNSAwLjE5NHYwbC01Ljg4MyAzNC41MTdjLTAuMDA5IDAuMTYtMC4wODcgMC4yNDItMC4yMzMgMC4yNDd6TTExMy4yNDMgNS43OTJ2MGMtMS43NzMtMC4wMjMtMy40MDQtMC41MDEtNC44OTItMS40MzR2MGMtMS40NjgtMC45MzMtMi42NDItMi4xNjUtMy41MjEtMy42OTYtMC44ODctMS41MzItMS4zMTgtMy4yMTEtMS4yOTUtNS4wMzh2MGwwLjI1Ny0xNS44MzhjMC4wMjQtMS44NTMgMC40OTMtMy41MTQgMS40MDYtNC45ODJ2MGMwLjktMS40ODggMi4xMDUtMi42NzMgMy42MTctMy41NTMgMS41MDUtMC44ODcgMy4xMzgtMS4zMTkgNC44OTctMS4yOTZ2MGMxLjgyIDAuMDI0IDMuNDUxIDAuNDkyIDQuODkyIDEuNDA0djBjMS40NDggMC45MTkgMi42MDYgMi4xMzQgMy40NzMgMy42NDYgMC44NjcgMS41MTggMS4yODggMy4xOTcgMS4yNjQgNS4wMzd2MGwtMC4xNTcgMTUuODM5Yy0wLjAyNCAxLjgyNy0wLjQ4NiAzLjQ5MS0xLjM4NiA0Ljk5M3YwYy0wLjkxMyAxLjUxNS0yLjExNiAyLjcxOS0zLjYwNyAzLjYxMy0xLjQ5MiAwLjg5NC0zLjE0MSAxLjMyOS00Ljk0OCAxLjMwNXpNMTEzLjMyMi0wLjIzN3YwYzEuMDA3IDAuMDEzIDEuODkyLTAuMzg1IDIuNjU2LTEuMTk2IDAuNzU3LTAuODE3IDEuMTQzLTEuNzM5IDEuMTU2LTIuNzY1djBsMC4xNTctMTUuODM5YzAuMDE0LTEuMTA3LTAuMzIzLTIuMDQ4LTEuMDEzLTIuODI0LTAuNjktMC43NjktMS41NzItMS4xNjEtMi42NDUtMS4xNzR2MGMtMS4wMjctMC4wMTMtMS45MTEgMC4zNDgtMi42NTQgMS4wODUtMC43NDMgMC43MzctMS4xMjIgMS42NzUtMS4xMzcgMi44MTV2MGwtMC4yMDcgMTUuODM5Yy0wLjAxNCAxLjA5MyAwLjM0IDIuMDM4IDEuMDYzIDIuODM0IDAuNzIzIDAuODAzIDEuNTk4IDEuMjExIDIuNjI0IDEuMjI1ek0xMzUuNDA1IDYuMjA0djBsLTUuNzMtMC4zNDNjLTAuMTEzLTAuMDA3LTAuMTY2LTAuMDc3LTAuMTU4LTAuMjF2MGwwLjktMTQuMTcyLTUuNDctMjAuNTU0Yy0wLjAyNS0wLjEzNSAwLjAyOS0wLjE5OSAwLjE2Mi0wLjE5MXYwbDUuNTYgMC4zMzRjMC4xNiAwLjAxIDAuMjUyIDAuMDgyIDAuMjc3IDAuMjE3djBsMi44NzkgMTMuNjQ2IDQuNTQ4LTEzLjIwMWMwLjA0MS0wLjEzMSAwLjEyOC0wLjE5MyAwLjI2MS0wLjE4NXYwbDUuNiAwLjMzNmMwLjEzMyAwLjAwOCAwLjE3OSAwLjA3OCAwLjEzOCAwLjIwOHYwbC03Ljk0NCAxOS41NS0wLjgxMiAxNC4zNzdjLTAuMDA4IDAuMTMzLTAuMDc5IDAuMTk2LTAuMjExIDAuMTg4ek0xNDIuNTg5IDYuNDAzdjBsOS43MTQtMzMuNTI2YzAuMDQ3LTAuMTI5IDAuMTM3LTAuMTg3IDAuMjY5LTAuMTczdjBsNy4yMTIgMC43NDhjMC4xMjYgMC4wMTMgMC4xOTkgMC4wODggMC4yMTggMC4yMjR2MGwyLjM4IDM0Ljc4MmMtMC4wMDMgMC4xNjEtMC4wNzggMC4yMzMtMC4yMjMgMC4yMTh2MGwtNS41MTEtMC41NzJjLTAuMTU5LTAuMDE3LTAuMjQtMC4xMDUtMC4yNDQtMC4yNjd2MGwtMC4xNDgtMy43MDUtNi43NzMtMC43MDMtMC45MTYgMy41OTRjLTAuMDM2IDAuMTU3LTAuMTI4IDAuMjI4LTAuMjc0IDAuMjEzdjBsLTUuNTMtMC41NzRjLTAuMTMzLTAuMDE0LTAuMTkxLTAuMS0wLjE3NC0wLjI1OXpNMTU1LjgxMy0xLjI4M2wtMC41OTktMTQuMTc3LTAuMDk3LTEuODctMC40MSAxLjgxNy0zLjY3OCAxMy43MzR6TTE3My42NCAxMC44ODV2MGMtMS43ODctMC4yNjgtMy4zMjktMC45NTEtNC42MjctMi4wNXYwYy0xLjMxNy0xLjEwOC0yLjMwMS0yLjQ3Ni0yLjk1My00LjEwNC0wLjY1Mi0xLjYyOC0wLjgzOS0zLjM2OS0wLjU2MS01LjIyMXYwbDIuMzUxLTE1LjY2NWMwLjI3LTEuOCAwLjk1OC0zLjM3NSAyLjA2NS00LjcyNXYwYzEuMDk1LTEuMzY2IDIuNDQxLTIuMzg0IDQuMDM4LTMuMDU1IDEuNjA1LTAuNjc2IDMuMjc0LTAuODg0IDUuMDA4LTAuNjIzdjBjMS44MiAwLjI3MyAzLjM5NiAwLjk1NSA0LjcyOSAyLjA0NXYwYzEuMzMxIDEuMTAzIDIuMzE3IDIuNDYxIDIuOTU4IDQuMDc0IDAuNjQyIDEuNjA2IDAuODI0IDMuMzM2IDAuNTQ2IDUuMTg4djBsLTAuMzQyIDIuMjc1Yy0wLjAxOSAwLjEyNS0wLjExMSAwLjE3Ni0wLjI3NSAwLjE1MXYwbC01LjU0OC0wLjgzM2MtMC4xMzItMC4wMi0wLjE4OC0wLjA5Mi0wLjE3LTAuMjE4djBsMC4yODQtMS44ODljMC4xODgtMS4yNTMtMC4wMDktMi4zNDQtMC41OTEtMy4yNzQtMC41ODktMC45MjQtMS40MTUtMS40NjYtMi40NzYtMS42MjV2MGMtMC45NDktMC4xNDMtMS44NTIgMC4xMjMtMi43MDggMC43OTctMC44NTcgMC42OC0xLjM2NSAxLjU1MS0xLjUyNSAyLjYxMnYwbC0yLjM1MSAxNS42NjVjLTAuMTYyIDEuMDgxIDAuMDU3IDIuMDY1IDAuNjU5IDIuOTUgMC42MDcgMC44OTMgMS40MDIgMS40MTQgMi4zODQgMS41NjF2MGMxLjA2MSAwLjE1OSAyLjAwNi0wLjA5IDIuODMzLTAuNzQ3IDAuODItMC42NTkgMS4zMTQtMS41NDUgMS40ODEtMi42NnYwbDAuMzY1LTIuNDMzLTMuNDUxLTAuNTE4Yy0wLjE3OC0wLjAyNy0wLjI1NS0wLjExOS0wLjIzMS0wLjI3N3YwbDAuODMxLTUuNTM4YzAuMDI0LTAuMTU4IDAuMTI1LTAuMjI0IDAuMzAzLTAuMTk3djBsOS4yNDYgMS4zODhjMC4xMzIgMC4wMiAwLjE4NiAwLjEwOSAwLjE2MiAwLjI2N3YwbC0xLjIzMiA4LjIwOGMtMC4yNzggMS44NTMtMC45NjUgMy40NjItMi4wNiA0LjgyOHYwYy0xLjExNSAxLjM2My0yLjQ2MSAyLjM4MS00LjAzOCAzLjA1NC0xLjU4MyAwLjY2Ni0zLjI4NCAwLjg2Mi01LjEwNCAwLjU4OXpNMjAyLjE0IDE1LjU1OHYwbC0xNS44NTctMy4xMThjLTAuMTI0LTAuMDI0LTAuMTcxLTAuMTE1LTAuMTQtMC4yNzJ2MGw2LjY3Ny0zMy42OTVjMC4wMjYtMC4xMzEgMC4xMDEtMC4xODQgMC4yMjUtMC4xNnYwbDE1Ljc1OCAzLjA5OWMwLjEzMSAwLjAyNiAwLjE4IDAuMTIgMC4xNDggMC4yODR2MGwtMS4wNzggNS40ODVjLTAuMDI0IDAuMTI0LTAuMTAyIDAuMTc0LTAuMjMzIDAuMTQ4djBsLTEwLjA1OC0xLjk3OC0xLjUwNyA3LjY2MyAxMC4wNTggMS45NzhjMC4xMzEgMC4wMjYgMC4xODMgMC4xMDQgMC4xNTcgMC4yMzV2MGwtMS4wNDMgNS41NjNjLTAuMDI2IDAuMTMxLTAuMTA0IDAuMTgzLTAuMjM0IDAuMTU4djBsLTEwLjEwNy0xLjk4OC0xLjY4NiA4LjU3NiAxMC4xMDYgMS45ODhjMC4xMzEgMC4wMjYgMC4xODEgMC4xMTcgMC4xNSAwLjI3NHYwbC0xLjEwMiA1LjYwMmMtMC4wMjYgMC4xMzEtMC4xMDQgMC4xODMtMC4yMzQgMC4xNTh6IiBvcGFjaXR5PSIxIiB0cmFuc2Zvcm09Im1hdHJpeCgxLDAsMCwxLDAsMCkiIGZpbGw9IiNjYjExMDYiIGNsYXNzPSJ3b3JkbWFyay10ZXh0LTAiIGRhdGEtZmlsbC1wYWxldHRlLWNvbG9yPSJwcmltYXJ5IiBpZD0idGV4dC0wIi8+PC9zdmc+PC9nPjwvc3ZnPjwvZz48L3N2Zz48L2c+PC9zdmc+PC9nPjwvc3ZnPjwvZz48ZGVmcy8+PC9zdmc+"
                    alt=""
                />
            </div>
            <div className="uploader">
                <form className="file-uploader">
                    <input
                        id="file-loader-button"
                        type="file"
                        className="file-uploader__upload-button"
                        onChange={handleOnChange}
                    />
                    <img
                        src={ movieURL ? movieURL : "../images/no_image.jpg"}
                        alt="preview"
                        className="file-uploader__preview"
                        onDrop={handleDrop}
                        onDragEnter={handleDragEmpty}
                        onDragOver={handleDragEmpty}
                    />
                    <label htmlFor="file-loader-button" className="file-uploader__custom-button">
                        Загрузить файл
                    </label>
                    <div className="file-uploader__file-name">{movie ? movie.name : ""}</div>
                </form>
            </div>
            <div className="upload-to-server">
                {drag
                    ? <div
                        className="drop-area"
                        onDragStart={e => dragStartHandler(e)}
                        onDragLeave={e => dragLeaveHandler(e)}
                        onDragOver={e => dragStartHandler(e)}
                        onDrop={e => onDropHandler(e)}
                    >Отпустите файлы, чтобы загрузить их</div>
                    : <div
                        onDragStart={e => dragStartHandler(e)}
                        onDragLeave={e => dragLeaveHandler(e)}
                        onDragOver={e => dragStartHandler(e)}
                    >Перетащите файлы, чтобы загрузить их</div>
                }
            </div>
        </div>
    );
};