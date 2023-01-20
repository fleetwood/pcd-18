import { NextApiRequest, NextApiResponse } from "next";

const json = [
  {
    module: "application/routes",
    files: [
      {
        name: "util.php",
        commands: ["33 exec('npm run --prefix /opt/pcn init:db', $output);"],
      },
    ],
  },
  {
    module: "mia_handler",
    files: [
      {
        name: "applyVideoPlaylist.php",
        commands: [
          "25 exec('mv  ' . $filePath . ' /home/media/.');",
          "29 exec('psi_prep /home/media/' . basename($filePath));",
          "55 $curlResponse = curl_exec($ch);",
        ],
      },
      {
        name: "lg_api.php",
        commands: [
          "39 exec('rm -rf /opt/procentric/persistentData/products/EPGApp/filesystem/data'); // delete data folder",
          '60 exec("rm -rf " . $this->_DESTINATION_DIR . "/*");',
          "64 exec('unzip ' . $filename);",
          '65 exec("chmod 0777 " . $this->_DESTINATION_DIR . " -R");',
          "66 exec('rm ' . $filename); // delete .zip file",
          "67 exec('rm -rf data'); // delete data folder",
          "68 exec('rm -rf __MACOSX'); // delete __MACOSX folder",
        ],
      },
    ],
  },
  {
    module: "packages/phoenix",
    files: [
      {
        name: "controller.php",
        commands: [
          "228 @shell_exec(\"mysql -u{$dbConfig['username']} -p{$dbConfig['password']} {$pkgOptions['ptDatabase']} < \" . $sqlFilePath);",
          "234 @shell_exec(\"mysql -u{$dbConfig['username']} -p{$dbConfig['password']} {$pkgOptions['ptDatabase']} < \" . $sqlFilePath);",
          "240 @shell_exec(\"mysql -u{$dbConfig['username']} -p{$dbConfig['password']} {$pkgOptions['ptDatabase']} < \" . $sqlFilePath);",
          "246 @shell_exec(\"mysql -u{$dbConfig['username']} -p{$dbConfig['password']} {$pkgOptions['ptDatabase']} < \" . $sqlFilePath);",
        ],
      },
    ],
  },
  {
    module: "packages/phoenix/blocks/home",
    files: [
      {
        name: "controller.php",
        commands: [
          '174 if (!@exec("/sbin/ifconfig tun0; echo $?")) {',
          "265 $total1 = @exec(\"df /var/www/html/ | awk '{print $2,$3}' | tail -1\");",
          "266 $total2 = @exec(\"df /home/media/ | awk '{print $2,$3}' | tail -1\");",
          "270 $used1 = @exec(\"du -s /var/www/html | awk '{print $1}'\");",
          "271 $used2 = @exec(\"du -s /home/media | awk '{print $1}'\");",
        ],
      },
    ],
  },
  {
    module: "packages/phoenix/blocks/manager",
    files: [
      {
        name: "controller.php",
        commands: [
          "1113 $server_ip_em2 = @exec(\"hostname -I | awk {'print $2'}\");",
          "1123 $curlResponse = curl_exec($curl);",
          "1154 $server_ip_em2 = @exec(\"hostname -I | awk {'print $2'}\");",
          "1166 $curlResponse = curl_exec($curl);",
        ],
      },
    ],
  },
  {
    module: "packages/phoenix/blocks/project",
    files: [
      {
        name: "controller.php",
        commands: [
          "1659 exec('echo \"curl ' . $vod_manager->getExecuteNowPathUrl() . '\" |at now');",
        ],
      },
    ],
  },
  {
    module: "packages/phoenix/blocks/settings",
    files: [
      {
        name: "controller.php",
        commands: [
          "745 exec('chmod 0777 ' . $path); //  ?? ??",
          "812 exec('chmod 0777 ' . $path);",
          '1922 exec(\'/usr/pcstools/psi_prep /home/media/\' . basename($_FILES["uploadVideoFile"]["name"]));',
          "2670 exec($job_statement);",
          "3853 exec('cp ' . $src_appsBundle_path . ' ' . $dest_appsBundle_path);",
          "3892 exec('rm -rf /opt/procentric/persistentData/products/' . $data['name'] . '/filesystem/*');",
          "3914 exec('sync');",
          "3915 exec('touch /home/procentric/poweroff');",
          "3945 $shr = shell_exec('/usr/pcstools/create_debug_user.sh');",
          "4182 exec('rm -rf ' . $output_dir); // clean directory",
          "4183 exec('mkdir ' . $output_dir); // re-create directory",
          "4184 exec('chmod 0777 ' . $output_dir . ' -R'); // re-create directory",
          "4226 exec('cp ' . $apps_bundle . \" $output_dir/appsBundle.zip\");",
          "4238 exec($command);",
          '4333 exec("cp $filePath $output_dir/pcn.sql");',
          "4393 exec('rm -rf ' . $output_dir . '/images'); // clean directory",
          "4394 exec('mkdir ' . $output_dir . '/images'); // re-create directory",
          "4395 exec('chmod 0777 ' . $output_dir . '/images -R'); // re-create directory",
          "4449 exec($command);",
          '4486 exec("rm -rf {$output_dir}/*"); // clean directory',
          '4531 $logOutput = shell_exec("cat /var/log/procentric-updates.log");',
          "4541 exec('rm -rf /home/media');",
          '4583 $logOutput = shell_exec("tail -n 150 /home/mia/logs/pipeline.log");',
          '4616 exec("unzip -p $mia_zip_path wrapperVersion.json", $output); // get contents of wrapperVersion.json from mia.zip',
          '4621 exec("unzip -p $mia_zip_path miapst-version.json", $output2); // get contents of miapst-version.json from mia.zip',
          "4634 exec('ls -l /home/media', $output);",
          "4720 shell_exec('sudo /usr/bin/systemctl start docker.service');",
          "4721 shell_exec('sudo /usr/bin/systemctl enable docker.service');",
          "4834 shell_exec('sudo /usr/bin/systemctl start docker.service');",
          "4835 shell_exec('sudo /usr/bin/systemctl enable docker.service');",
          '5218 exec("chmod 0777 $config_path");',
          "5222 $output = exec('/usr/bin/sudo /usr/pcstools/force_https.sh');",
          "5479 exec('echo \"curl http://localhost/ftp/carousel_ftp\" |at now');",
        ],
      },
    ],
  },
  {
    module: "packages/phoenix/blocks/settings/elements",
    files: [
      {
        name: "network.php",
        commands: [
          "19 <dd id=\"hostAddress\"><?=@exec(\"ip addr show $(ip l |grep -E '^2:' |awk '{print $2}' |awk -F: '{print $1}') |grep 'inet ' |awk '{print $2}' |awk -F/ '{print $1}'\");?></dd>",
        ],
      },
    ],
  },
  {
    module: "packages/phoenix/blocks/template_editor",
    files: [
      {
        name: "controller.php",
        commands: [
          '2937 shell_exec("rm -rf " . $output_dir . "/*");',
          "3004 exec(\"cp -R \" . $_SERVER['DOCUMENT_ROOT'] .",
          "3019 exec($command);",
          '3070 shell_exec("rm -rf " . $full_filepath . "/");',
          "7031 exec('chmod 0777 ' . $path . ' -R');",
          "7082 exec('rm -rf /opt/procentric/persistentData/products/' . $targetFolder . '/filesystem/*');",
          "7085 exec('cp  /var/www/html/phoenixphpclient/export/' . $filename . '.zip' . ' /opt/procentric/persistentData/products/' . $targetFolder . '/filesystem/');",
          "7086 exec('unzip /opt/procentric/persistentData/products/' . $targetFolder . '/filesystem/' . $filename . '.zi",
          "7087 exec('rm -rf /opt/procentric/persistentData/products/' . $targetFolder . '/filesystem/*.zip');",
          "7090 exec('rm -rf /var/www/html/phoenixphpclient/export/' . $filename . '.zip');",
          "7168 exec($command);",
          '7170 exec("rm -rf {$export_dir}/*");',
          "7174 exec('rm -rf ' . $path);",
          '7545 exec("cp -R " . $_SERVER[\'DOCUMENT_ROOT\'] . "/application/files/widget-26/appsBundle/apps/" . " $export_path/smartapps");',
          "7625 $shell_result_output = shell_exec(escapeshellcmd($command));",
          "7631 $shell_result_output = shell_exec(escapeshellcmd($command));",
          "7661 exec('rm -rf ' . $export_path);",
          "7750 exec('rm -rf ' . $export_path);",
          "7834 exec('rm -rf ' . $preview_path);",
          '7842 exec("cp -R " . $_SERVER[\'DOCUMENT_ROOT\'] . "/application/files/widget-26/appsBundle/apps/" . " $preview_path/smartapps");',
          "7855 $shell_result_output = shell_exec(escapeshellcmd($command));",
          "9537 exec('cp  ' . $project_thumbs_dir . $projectName . '.jpg ' . $deployed_dir . 'deployed.jpg');",
        ],
      },
    ],
  },
  {
    module: "packages/phoenix/controllers/single_page",
    files: [
      {
        name: "openapi.php",
        commands: ["104 $curl_result = curl_exec($curl);"],
      },
    ],
  },
  {
    module: "packages/phoenix/jobs",
    files: [
      {
        name: "get_tv_status.php",
        commands: ["63 $curlResponse = curl_exec($ch);"],
      },
    ],
  },
  {
    module: "packages/phoenix/single_pages",
    files: [
      {
        name: "QMS.php",
        commands: [
          "3 $server_ip_em2 = @exec(\"hostname -I | awk {'print $2'}\");",
        ],
      },
    ],
  },
  {
    module: "packages/phoenix/src/LGE/ProCentric/Common",
    files: [
      {
        name: "CronManager.php",
        commands: [
          "98 $output = shell_exec($command);",
          "108 exec($command);",
          "190 exec('cd /etc/cron.daily');",
          '191 exec("crontab -l > {$destinationPath}");',
          "242 exec('cd /etc/cron.daily');",
          '243 exec("crontab {$this->getCronFilepath()}");',
          "330 exec($at_statement);",
        ],
      },
    ],
  },
  {
    module: "packages/phoenix/src/LGE/ProCentric/Controller/Bundle",
    files: [
      {
        name: "ChannelIconsImporter.php",
        commands: ["145 exec($command);", "150 exec($command);"],
      },
      {
        name: "ImportManager.php",
        commands: ["225 exec($command);"],
      },
      {
        name: "ProjectImporter.php",
        commands: [
          "338 exec('basename $(ls /home/updates/[1-9]*/*/*-update |tail -n1)', $output, $dummy);",
        ],
      },
      {
        name: "ServerImporter.php",
        commands: ["593 $curlResponse = curl_exec($ch);"],
      },
      {
        name: "SmartAppsImporter.php",
        commands: [
          '194 exec("mkdir -p $destination"); // create directory',
          '195 exec("chown -R apache:apache $destination"); // re-create directory)',
          "200 exec($command);",
          "205 exec($command);",
        ],
      },
    ],
  },
  {
    module: "packages/phoenix/src/LGE/ProCentric/Controller/Fetch",
    files: [
      {
        name: "EAManager.php",
        commands: ["126 exec($at_statement);"],
      },
      {
        name: "FetchManager.php",
        commands: [
          "193 exec($command);",
          "227 $now_date_time = exec('date +\"%m/%d/%Y %H:%M\"');",
          "228 $now_time = exec('date +\"%H:%M\"');",
        ],
      },
      {
        name: "VodManager.php",
        commands: [
          "140 exec($at_statement);",
          "331 $output = exec('/bin/sudo /usr/pcstools/vod_opt-in.sh');",
        ],
      },
    ],
  },
  {
    module: "packages/phoenix/src/LGE/ProCentric/Controller/ServerMode",
    files: [
      {
        name: "Mode.php",
        commands: [
          "177 exec('/usr/bin/nohup /usr/bin/sudo /usr/pcstools/uni_or_multicast.sh > /dev/null 2>&1 &'); // allow process to continue running while apache is restarting",
        ],
      },
      {
        name: "Unicast.php",
        commands: [
          '354 exec("rm -rf " . $this->getFirmwareDirectory() . "/*");',
          "1022 exec('ls -lR | grep \"^d\" | wc -l 2>&1', $output, $dummy);",
          "1028 exec('find ' . $dir_name . ' -type f | wc -l  2>&1', $output2, $dummy);",
          "1034 exec('du -sh ' . $dir_name . '  2>&1', $output3, $dummy);",
          '1528 exec("rm -rf " . $this->getFirmwareDirectory() . "/" . $fileName . "/*");',
        ],
      },
    ],
  },
  {
    module: "packages/phoenix/src/LGE/ProCentric/DAO",
    files: [
      {
        name: "TrustedIpDAO.php",
        commands: [
          "148 $server_ip_em2 = @exec(\"hostname -I | awk {'print $2'}\");",
          "165 $curlResponse = curl_exec($curl);",
        ],
      },
      {
        name: "AbstractDAO.php",
        commands: ["58 if($this->connection->exec($sql) !== false) {"],
      },
      {
        name: "ChannelGroupJsonDAO.php",
        commands: [
          '196 exec("rm -rf ".SystemPaths::$CAROUSEL_APP . "/channelGroups.json");',
          '197 exec("cp " . SystemPaths::$CAROUSEL_DATA . "/channelGroups.json ". SystemPaths::$CAROUSEL_APP);',
        ],
      },
      {
        name: "ChannelJsonDAO.php",
        commands: [
          "49 exec('rm -rf ' . SystemPaths::$CAROUSEL_APP . 'channels.json');",
          "50 exec('cp '.SystemPaths::$CAROUSEL_DATA.'/channels.json '.SystemPaths::$CAROUSEL_APP);",
        ],
      },
      {
        name: "GroupJsonDAO.php",
        commands: [
          "382 exec('rm -rf /opt/procentric/persistentData/products/EPGApp/filesystem/groups.json');",
          "383 exec('rm -rf /opt/procentric/persistentData/products/EPGApp/filesystem/channels.json');",
          "384 exec('cp  /opt/procentric/persistentData/products/EPGData/filesystem/groups.json  /opt/procentric/persistentData/products/EPGApp/filesystem/');",
          "385 exec('cp  /opt/procentric/persistentData/products/EPGData/filesystem/channels.json  /opt/procentric/persistentData/products/EPGApp/filesystem/');",
          "400 exec('rm -rf /opt/procentric/persistentData/products/EPGApp/filesystem/groups.json');",
        ],
      },
      {
        name: "LanguageDAO.php",
        commands: [
          "194 exec('chmod 0777 ' . $path);",
          "218 exec('chmod 0777 ' . $path);",
        ],
      },
    ],
  },
  {
    module: "packages/phoenix/src/LGE/ProCentric/Mia",
    files: [
      {
        name: "Api.php",
        commands: [
          "38 exec('rm -rf /opt/procentric/persistentData/products/EPGApp/filesystem/data'); // delete data folder",
          '57 exec("rm -rf " . $this->_DESTINATION_DIR . "/*");',
          "61 exec('unzip ' . $filename);",
          '62 exec("chmod 0777 " . $this->_DESTINATION_DIR . " -R");',
          "63 exec('rm ' . $filename); // delete .zip file",
          "64 exec('rm -rf data'); // delete data folder",
          "65 exec('rm -rf __MACOSX'); // delete __MACOSX folder",
        ],
      },
    ],
  },
  {
    module: "packages/phoenix/src/LGE/ProCentric/Model",
    files: [
      {
        name: "SettingsMenu.php",
        commands: [
          '213 $available_space = shell_exec(escapeshellcmd("zfs list -H -o available tank/var/procentric/media"));',
          '214 $used_space = exec("zfs list -H -o available tank/var/procentric/media");',
          "415 exec('grep -A1 \"PLAY RECAP\" /var/log/ansible.log |grep localhost |tail -n1 |awk -F: '{print $NF}'', $output, $dummy);",
          "467 exec('ss -ntlp |awk '{print $4}' |awk -F: '{print $NF}' |grep -v Local', $output);",
        ],
      },
    ],
  },
  {
    module: "packages/phoenix/src/LGE/ProCentric/PcsClient",
    files: [
      {
        name: "CurlClient.php",
        commands: [
          "125 $curlResponse = curl_exec($curl);",
          "181 $curlResponse = curl_exec($curl);",
          "863 exec('COMP=' . $component_name . ' ; grep \"' . $component_name . '\" /var/procentric/manifest |awk -F\"${COMP}-\" '{print $NF}' |awk -F.x86_64 '{print $1}'', $output, $dummy);",
          "872 exec('uname -r', $output, $dummy);",
          "881 exec('grep php-[0-9] /var/procentric/manifest |awk -Fphp- '{print $NF}' |awk -F.x86_64 '{print $1}'', $output, $dummy);",
          "890 exec('grep \"Pro:Centric\" /etc/issue |awk -F/ '{print $1}' |awk '{print $NF}' 2>&1', $output, $dummy);",
          "899 exec('grep \" java-[0-9]\" /var/procentric/manifest |grep -vE \"headless|devel\" |awk -Fjava- '{print $NF}' |awk -F.x86_64 '{ print $1 }'', $output, $dummy);",
          "910 exec('grep \"docker-ce-[0-9]\" /var/procentric/manifest |awk -Fdocker-ce- '{print $NF}' |awk -F.x86_64 '{ print $1 }'', $output, $dummy);",
          "919 exec('head -n1 /var/procentric/manifest |awk '{$NF=\"\"}1'', $output, $dummy);",
          "928 exec('basename $(ls /home/updates/[1-9]*/*/*-update |tail -n1)', $output, $dummy);",
          "960 exec('tail -n1 /var/procentric/manifest |awk '{$NF=\"\"}1'', $output, $dummy);",
          "1907 $server_ip = @exec('ip addr show ' . $interface . ' |grep 'inet ' |awk '{print $2}' |awk -F/ '{print $1}' |head -n1');",
          "1961 $data = curl_exec($curl);",
          '3149 exec("chmod 0777 $json_filepath");',
          "4668 exec('rm -rf ' . $output_dir . '/images'); // clean directory",
          "4669 exec('mkdir ' . $output_dir . '/images'); // re-create directory",
          "4670 exec('chmod 0777 ' . $output_dir . '/images -R'); // re-create directory",
          "4680 exec($command);",
          "4723 exec('mkdir -p ' . \"$output_dir/images/$dirs_list\");",
          '4724 exec("cp $src_path $dest_path");',
          '4739 exec("mkdir -p $output_dir/images/$dest_thumb_dir");',
          '4740 exec("cp $src_thumb_dir/$thumb_fvFilename $dest_thumb_dir/$thumb_fvFilename");',
          '4755 exec("mkdir -p $output_dir/images/$dest_thumb_dir");',
          '4756 exec("cp $src_thumb_dir/$thumb_fvFilename $dest_thumb_dir/$thumb_fvFilename");',
          "5053 exec($command);",
          "5190 exec($command);",
          '5368 exec("mkdir /home/procentric/tmp_font");',
          '5369 exec("mkdir /home/procentric/tmp_font_dir");',
          '5370 exec("chmod 0777 /home/procentric/tmp_font -R");',
          '5371 exec("chmod 0777 /home/procentric/tmp_font_dir -R");',
          "5386 exec($command);",
          "5464 exec($command);",
          '5483 exec("rm /home/procentric/tmp_font -R");',
          '5484 exec("rm /home/procentric/tmp_font_dir -R");',
          '5593 exec("mv {$data->filePath} /var/www/html/phoenixphpclient/temp");',
          "5666 $response = curl_exec($ch); // execute the curl command",
        ],
      },
    ],
  },
  {
    module: "preview",
    files: [
      {
        name: "index.php",
        commands: [
          "12 $server_ip = @exec('ip addr show eth0 |grep 'inet ' |awk '{print $2}' |awk -F/ '{print $1}'');",
        ],
      },
    ],
  },
  {
    module: "packages/phoenix/blocks/settings",
    files: [
      {
        name: "controller.php",
        commands: [
          "3808 //exec('sudo chmod 777 /var/www/html/phoenixphpclient/application/files -R');",
          "3809 //exec('sudo chown apache:apache /var/www/html/phoenixphpclient/application/files -R');",
        ],
      },
    ],
  },
  {
    module: "packages/phoenix/controllers/single_page",
    files: [
      {
        name: "login.php",
        commands: [
          "57 //$res = shell_exec('find /var/lib/php/session/ -cmin +1 -type f | xargs rm 2> /dev/null');",
        ],
      },
    ],
  },
  {
    module: "packages/phoenix/src/LGE/ProCentric/Controller/Bundle",
    files: [
      {
        name: "ImageImporter.php",
        commands: ["158 exec($at_command, $output, $dummy)"],
      },
    ],
  },
];

const handle = async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(json);
};

export default handle