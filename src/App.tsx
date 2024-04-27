import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function App() {

    return (
        <>
            <Box display="flex" flexDirection="row" component="section" sx={{width: '100vw', height: '100vh'}}>
                <Box display="flex" flexDirection="column" component="section" sx={{height: '100vh'}}>
                    <Typography sx={{
                        mt: 0.7, mr: 0.25, ml: 0.5,
                        textAlign: 'center',
                        height: '2vh',
                        bgcolor: '#F8E6E3',
                        color: '#F09180',
                        borderRadius: '8px'
                    }}>紧急&重要</Typography>
                    <Box component="section"
                         sx={{
                             my: 0.25, mr: 0.25, ml: 0.5,
                             width: '49.70vw',
                             height: '47.25vh',
                             bgcolor: '#F8E6E3',
                             borderRadius: '8px'
                         }}>
                        <Typography sx={{
                            textAlign: 'center',
                            verticalAlign: 'middle',  // 垂直居中
                            color: '#F09180',
                            height: '47.25vh',
                            lineHeight: '47.25vh',  // 设置行高，确保文本垂直居中
                            borderRadius: '8px'
                        }}>优先解决</Typography>
                    </Box>
                    <Typography sx={{
                        mt: 0.25, mr: 0.25, ml: 0.5,
                        textAlign: 'center',
                        height: '2vh',
                        bgcolor: '#E2ECFA',
                        color: '#7FAEF2',
                        borderRadius: '8px'
                    }}>紧急&不重要</Typography>
                    <Box component="section"
                         sx={{
                             mt: 0.25,
                             mr: 0.25,
                             ml: 0.5,
                             width: '49.70vw',
                             height: '47.25vh',
                             bgcolor: '#E2ECFA',
                             borderRadius: '8px'
                         }}>
                        <Typography sx={{
                            textAlign: 'center',
                            verticalAlign: 'middle',  // 垂直居中
                            color: '#7FAEF2',
                            height: '47.25vh',
                            lineHeight: '47.25vh',  // 设置行高，确保文本垂直居中
                            borderRadius: '8px'
                        }}>给别人做</Typography>
                    </Box>
                </Box>
                <Box display="flex" flexDirection="column" component="section" sx={{height: '100vh'}}>
                    <Typography sx={{
                        mt: 0.7, ml: 0.25, mr: 0.5,
                        textAlign: 'center',
                        height: '2vh',
                        bgcolor: '#FBF2DD',
                        color: '#F4BE5B',
                        borderRadius: '8px'
                    }}>不紧急&重要</Typography>
                    <Box component="section"
                         sx={{
                             my: 0.25, ml: 0.25, mr: 0.5,
                             width: '49.70vw',
                             height: '47.25vh',
                             bgcolor: '#FBF2DD',
                             borderRadius: '8px'
                         }}>
                        <Typography sx={{
                            textAlign: 'center',
                            verticalAlign: 'middle',  // 垂直居中
                            color: '#F4BE5B',
                            height: '47.25vh',
                            lineHeight: '47.25vh',  // 设置行高，确保文本垂直居中
                            borderRadius: '8px'
                        }}>制定计划去做</Typography>
                    </Box>
                    <Typography sx={{
                        mt: 0.25, ml: 0.25, mr: 0.5,
                        textAlign: 'center',
                        height: '2vh',
                        bgcolor: '#E4F3DA',
                        color: '#7CCE5A',
                        borderRadius: '8px'
                    }}>不紧急&不重要</Typography>
                    <Box component="section"
                         sx={{
                             mt: 0.25, ml: 0.25, mr: 0.5,
                             width: '49.70vw',
                             height: '47.25vh',
                             bgcolor: '#E4F3DA',
                             borderRadius: '8px'
                         }}>
                        <Typography sx={{
                            textAlign: 'center',
                            verticalAlign: 'middle',  // 垂直居中
                            color: '#7CCE5A',
                            height: '47.25vh',
                            lineHeight: '47.25vh',  // 设置行高，确保文本垂直居中
                            borderRadius: '8px'
                        }}>有空再说</Typography>
                    </Box>
                </Box>
            </Box>
        </>
    )


}


export default App
