import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import UploadService from '../service/FileUploadService';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 'calc(100%)',
        marginBottom: 'calc(10%)'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));


export default function FileUploadPage() {
    const classes = useStyles();
    const [selectedFiles, setSelectedFiles] = useState(undefined);
    const [currentFile, setCurrentFile] = useState(undefined);
    const [progress, setProgress] = useState(0);
    const [message, setMessage] = useState("");
    const [fileInfos, setFileInfos] = useState([]);

    useEffect(() => {
        UploadService.getFiles().then((response) => {
            setFileInfos(response.data);
        });
    }, []);

    const selectFile = (event) => {
        setSelectedFiles(event.target.files);
    };

    const upload = () => {
        let currentFile = selectedFiles[0];

        setProgress(0);
        setCurrentFile(currentFile);

        UploadService.upload(currentFile, (event) => {
            setProgress(Math.round((100 * event.loaded) / event.total));
        })
            .then((response) => {
                setMessage(response.data.message);
                return UploadService.getFiles();
            })
            .then((files) => {
                setFileInfos(files.data);
            })
            .catch(() => {
                setProgress(0);
                setMessage("Could not upload the file!");
                setCurrentFile(undefined);
            });

        const timer = setTimeout(() => {
            setMessage("");
            setProgress(0);
            setCurrentFile(undefined);
            setSelectedFiles(undefined);
        }, 2000);
        setSelectedFiles(undefined);
        return () => clearTimeout(timer);
    };

    return (
        // <div className={classes.root}>
            <Grid container className={classes.root} spacing={2} justify="center" alignItems="center">
            <Grid xs={12}>
            {currentFile && (
                <div className="progress">
                    {/*<div*/}
                    {/*    className="progress-bar progress-bar-info progress-bar-striped"*/}
                    {/*    role="progressbar"*/}
                    {/*    aria-valuenow={progress}*/}
                    {/*    aria-valuemin="0"*/}
                    {/*    aria-valuemax="100"*/}
                    {/*    style={{ width: progress + "%" }}*/}
                    {/*>*/}
                    {/*    {progress}%*/}
                    {/*</div>*/}

                </div>
            )}
                <div className="alert alert-light" role="alert">
                    {message}
                </div>
            </Grid>
            <Grid xs={12}>
            <label className="btn btn-default">
                <input type="file" onChange={selectFile}>
                </input>
            </label>

            <button
                className="btn btn-success"
                disabled={!selectedFiles}
                onClick={upload}
            >
                Upload
            </button>
            </Grid>


            {/*<div className="card">*/}
            {/*    <div className="card-header">List of Files</div>*/}
            {/*    <ul className="list-group list-group-flush">*/}
            {/*        {fileInfos &&*/}
            {/*        fileInfos.map((file, index) => (*/}
            {/*            <li className="list-group-item" key={index}>*/}
            {/*                <a href={file.url}>{file.name}</a>*/}
            {/*            </li>*/}
            {/*        ))}*/}
            {/*    </ul>*/}
            {/*</div>*/}
            </Grid>
        // </div>
    );
}
