import { Config } from '@remotion/cli/config'

Config.setVideoImageFormat('jpeg')
Config.setOverwriteOutput(true)
// VP9/H264 quality knobs are passed on the CLI; keep config minimal.
